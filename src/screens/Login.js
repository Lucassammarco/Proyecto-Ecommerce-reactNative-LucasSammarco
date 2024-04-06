import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useLoginMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../feactures/auth/authSlice';
import { loginSchema } from '../utils/validations/authSchema';
import { deleteSession, insertSession } from '../utils/db';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin] = useLoginMutation();
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleLogin = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const response = await triggerLogin({ email, password});
      deleteSession()
      //insertSession(response)
      if (response.data && response.data.email && response.data.idToken && response.data.localId) {
        dispatch(setUser({ email: response.data.email, idToken: response.data.idToken, localId: response.data.localId }));
      } else {
        console.error("Response data is not as expected:", response);
      }
    } catch (error) {
      setErrorMessageEmail('');
      setErrorPassword('');

      switch (error.path) {
        case 'email':
          setErrorMessageEmail(error.message);
          break;
        case 'password':
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
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
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
      <Pressable onPress={handleSignUp}>
        <Text style={styles.signUpText}>¿No tienes cuenta? Regístrate aquí</Text>
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
  signUpText: {
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

export default Login;
