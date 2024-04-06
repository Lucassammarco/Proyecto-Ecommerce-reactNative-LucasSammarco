import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { usePostOrderMutation } from '../app/services/orders';
import AlertModal from '../components/AlertModal';
import { deleteCart } from '../feactures/cart/cartSlice';

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();
  const dispatch = useDispatch();
  
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      createdAt,
      ...cart,
    };

    try {
      await triggerAddOrder({ localId, order });
      dispatch(deleteCart());
      setMessage('¡La orden se ha enviado con exito!');
      setModalVisible(true);
    } catch (error) {
      console.error('Error al enviar la orden:', error);
      setMessage('Ha ocurrido un error al enviar la orden. Por favor, intentalo de nuevo.');
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Orden');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.footer}>
        <Pressable
          style={[styles.confirmButton, cart.items.length === 0 && styles.disabledButton]}
          onPress={handlerAddOrder}
          disabled={cart.items.length === 0}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: $ {cart.total}</Text>
      </View>

      <AlertModal
        visible={modalVisible}
        message={message}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    marginTop: 16,
    paddingVertical: 16,
    alignItems: 'flex-end',
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#dddddd',
  },
});
