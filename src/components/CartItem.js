import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { deleteCartItem } from '../feactures/cart/cartSlice';

const CartItem = ({ item }) => {
  
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.price}>SubTotal: {item.quantity * item.price}</Text>
      </View>
      <View>
        <Pressable style={styles.deleteButton} onPress={()=> dispatch(deleteCartItem(item.id))}>
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingVertical: 10,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    color: '#555555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
});
