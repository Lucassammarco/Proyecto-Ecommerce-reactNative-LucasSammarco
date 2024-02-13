import { StyleSheet, Text, View, Platform, Pressable } from 'react-native';
import React from 'react';
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts';

const CardCategory = ({ item, selectedCategoryState }) => {
  return (
    <Pressable onPress={()=>selectedCategoryState(item)}>
        <View style={styles.card}>
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
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:fonts.NanumGothicBold,
  },
});
