import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {

  const cart = useSelector((state)=> state.cart)

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.footer}>
        <Pressable style={styles.confirmButton}>
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
