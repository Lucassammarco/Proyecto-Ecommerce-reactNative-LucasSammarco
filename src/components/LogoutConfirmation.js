import { Alert } from 'react-native';

const LogoutConfirmation = ({ visible, onConfirm, onCancel }) => {
  return (
    visible &&
    Alert.alert(
      'Confirmación de Logout',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        { text: 'Sí', onPress: onConfirm },
        { text: 'No', onPress: onCancel, style: 'cancel' }
      ],
      { cancelable: false }
    )
  );
}

export default LogoutConfirmation;
