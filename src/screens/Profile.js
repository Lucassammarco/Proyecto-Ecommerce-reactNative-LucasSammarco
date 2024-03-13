import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AddButton from '../components/AddButton';
import { useSelector } from 'react-redux';
import { useGetImageQuery } from '../app/services/profile';


const Profile = ({ navigation }) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data} = useGetImageQuery(localId)
  return (
    <View style={styles.container}>
      <Image
        source={data ? {uri:data.image} : require('../../assets/image/user.png')}
        style={styles.profileImage}
        resizeMode="cover"
      />

      <AddButton
        title="Agregar Imagen de Perfil"
        onPress={() => navigation.navigate('ImageSelector')}
      />

      <AddButton
        title="Donde vivis?"
        onPress={() => navigation.navigate('LocationSelector')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default Profile;
