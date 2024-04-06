import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import { useGetProductQuery } from '../app/services/shop';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../feactures/cart/cartSlice';
import AlertModal from '../components/AlertModal';
import AddButton from '../components/AddButton';

const ProductDetail = ({route}) => {
  const {productoId} = route.params;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const { data: product, isLoading, isError } = useGetProductQuery(productoId);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addCartItem({ ...product, quantity }));
      setModalMessage('Producto agregado al carrito con éxito');
      setShowModal(true);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : isError ? (
        <Text>Error al cargar el producto</Text>
      ) : (
        <View>
          <Image style={styles.img} source={{ uri: product.thumbnail }} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: ${product.price}</Text>
          <Text style={styles.stock}>Stock: {product.stock} unidades</Text>

          <View style={styles.quantityContainer}>
            <Pressable onPress={handleDecreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable onPress={handleIncreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <AddButton title={'Agregar al Carrito'} onPress={handleAddToCart} />
        </View>
      )}
      
      <AlertModal
        visible={showModal}
        message={modalMessage}
        onClose={() => setShowModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
    textAlign: 'center',
  },
  stock: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 12,
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  addToCartButton: {
    marginTop: 16,
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProductDetail;
