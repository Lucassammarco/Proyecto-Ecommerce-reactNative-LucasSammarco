import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AddButton from '../components/AddButton';
import * as ImagePicker from 'expo-image-picker';
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile';
import { useSelector } from 'react-redux';

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState("");
    const [triggerImage] = usePutImageMutation()
    const localId = useSelector((state=>state.auth.localId))
    const {data,isSuccess} = useGetImageQuery(localId)

    useEffect(()=>{
        if(isSuccess && data) setImage(data.image)
    },[isSuccess,data])

    const pickImage = async () => {
       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
       if(granted){
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[4,3],
            quality:0.3,
            base64:true
        })

        if(!result.canceled){
           setImage('data:image/jpeg;base64,' + result.assets[0].base64)
        }
       }
    }

    const confirmImage = () => {
        
        triggerImage({ localId, image });
        navigation.goBack()
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={image ? {uri:image} : require('../../assets/image/user.png')}
                    style={styles.profileImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.buttonContainer}>
                <AddButton
                    title="Tomar foto"
                    onPress={pickImage}
                />
                <AddButton
                    title="Confirmar Foto"
                    onPress={confirmImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    profileImageContainer: {
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap:20,
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
    },
    buttonSeparator: {
        width: 10,
    },
});

export default ImageSelector;
