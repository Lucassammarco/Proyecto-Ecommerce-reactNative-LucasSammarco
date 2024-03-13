import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from '../components/AddButton';
import MapPreview from '../components/MapPreview';

const LocationSelector = ({navigation}) => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('');

  const onConfirmAddress = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>Mi direccion 123</Text>
      <MapPreview latitude="-41.097027" longitude="-71.449947" />
      <AddButton title="Confirmar Localización" onPress={onConfirmAddress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    gap:20,
  },
  addressText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LocationSelector;
