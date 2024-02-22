import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import products from '../utils/data/products.json';

const ProductDetail = ({route}) => {

  const {productoId} = route.params

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const producto = products.find((product) => product.id === productoId);
    setProduct(producto);
  }, [productoId]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    
    console.log(`Agregado al carrito: ${quantity} unidades de ${product.title}`);
  };

  return (
    <View>
      {product && (
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

          <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
