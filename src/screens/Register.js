import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRegisterMutation } from '../app/services/auth';
import { setUser } from '../feactures/auth/authSlice';
import { useDispatch } from 'react-redux';
import { registerSchema } from '../utils/validations/authSchema';
import { deleteSession, insertSession } from '../utils/db';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [triggerRegister] = useRegisterMutation();
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const response = await triggerRegister({ email, password });
      
      deleteSession()
      insertSession(response)
      
      if (response.data && response.data.email && response.data.idToken && response.data.localId) {
        dispatch(setUser({ email: response.data.email, idToken: response.data.idToken, localId: response.data.localId }));
      } else {
        console.error("Response data is not as expected:", response);
      }
    } catch (error) {
      setErrorMessageEmail('');
      setErrorPassword('');
      setErrorConfirmPassword('');

      switch (error.path) {
        case 'email':
          setErrorMessageEmail(error.message);
          break;
        case 'password':
          setErrorPassword(error.message);
          break;
        case 'confirmPassword':
          setErrorConfirmPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errorMessageEmail ? <Text style={styles.errorText}>{errorMessageEmail}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {errorPassword ? <Text style={styles.errorText}>{errorPassword}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      {errorConfirmPassword ? <Text style={styles.errorText}>{errorConfirmPassword}</Text> : null}
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
      <Pressable onPress={handleLoginRedirect}>
        <Text style={styles.signInText}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default Register;
