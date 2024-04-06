import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AddButton from '../components/AddButton';
import { useSelector, useDispatch } from 'react-redux';
import { useGetImageQuery } from '../app/services/profile';
import { setUsername } from '../feactures/auth/authSlice';
import AlertModal from '../components/AlertModal'; 

const Profile = ({ navigation }) => {
    const localId = useSelector((state) => state.auth.localId);
    const { data } = useGetImageQuery(localId);
    const username = useSelector((state) => state.auth.userName);
    const email = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();
    const [newUsername, setNewUsername] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleUpdateUsername = () => {
        dispatch(setUsername(newUsername));
        setNewUsername('');
        setModalVisible(true); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.greetingText}>Hola, {username}</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={data ? { uri: data.image } : require('../../assets/image/user.png')}
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <AddButton
                    title="Agregar Imagen de Perfil"
                    onPress={() => navigation.navigate('ImageSelector')}
                />
            </View>

            <Text style={styles.greetingText}>Email: {email}</Text>

            {!username && (
                <TouchableOpacity onPress={handleUpdateUsername}>
                    <Text style={styles.changeUsernameText}>Agregar Nombre de Usuario</Text>
                </TouchableOpacity>
            )}
            {!username && (
                <TextInput
                    style={styles.input}
                    placeholder="Nuevo nombre de usuario"
                    value={newUsername}
                    onChangeText={setNewUsername}
                />
            )}
            <AddButton
                title="Donde vives?"
                onPress={() => navigation.navigate('LocationSelector')}
            />

           
            <AlertModal
                visible={modalVisible}
                message="Muchas gracias por brindarnos tu nombre de usuario"
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    greetingText: {
        fontSize: 20,
        marginBottom: 20,
    },
    changeUsernameText: {
        fontSize: 16,
        marginBottom: 10,
        padding: 5,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 5,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default Profile;
