import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import colors from '../utils/global/colors';
import fonts from '../utils/global/fonts';

const CardCategory = ({ item, navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => navigation.navigate("Categorias", { categorySelected: item })}
    >
      <View style={[styles.card, isPressed && styles.cardPressed]}>
        <Text style={styles.categoryText}>{item}</Text>
      </View>
    </Pressable>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secundary,
    padding: 15,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  cardPressed: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.NanumGothicBold,
  },
});
