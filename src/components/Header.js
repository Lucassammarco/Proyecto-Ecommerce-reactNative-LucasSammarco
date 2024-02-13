import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../utils/global/colors';
import fonts from '../utils/global/fonts';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 45,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2980b9',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:fonts.OverpassBold
  },
});

export default Header;
