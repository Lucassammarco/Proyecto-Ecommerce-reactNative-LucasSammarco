import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#0056b3', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddButton;
