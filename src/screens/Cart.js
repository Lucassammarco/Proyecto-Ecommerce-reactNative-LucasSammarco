import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import CartItem from '../components/CartItem';
import { usePostOrderMutation } from '../app/services/orders';
import {deleteCart} from '../feactures/cart/cartSlice'

const Cart = ({navigation}) => {

  const cart = useSelector((state)=> state.cart)
  const localId = useSelector((state)=> state.auth.localId)
  const[triggerAddOrder] = usePostOrderMutation()
  const dispatch = useDispatch()


  const handlerAddOrder = async () => {
    const createdAt = new Date(). toLocaleString()
    const order = {
      createdAt,
      ...cart
    }
   await triggerAddOrder({localId,order})
   dispatch(deleteCart())
   navigation.navigate("Ordenes")
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.footer}>
        <Pressable style={styles.confirmButton} onPress={handlerAddOrder}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: $ {cart.total}</Text>
      </View>
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
    marginBottom:50,
    flexDirection:"row",
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
});
