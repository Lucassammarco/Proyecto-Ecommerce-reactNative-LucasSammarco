import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const OrdenItem = ({ orden }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.dateText}>
          {new Date(orden.createAt).toLocaleDateString()}
        </Text>
        <Text style={styles.titleText}>$ {orden.total}</Text>
      </View>
    </View>
  );
};

export default OrdenItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingVertical: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 16,
    color: '#555555',
  },
});
