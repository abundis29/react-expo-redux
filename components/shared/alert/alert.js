import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlertPop = () => {
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  return (
    <TouchableOpacity onPress={showAlert} style={styles.button}>
      <Text>Alert</Text>
    </TouchableOpacity>
  );
};
export default AlertPop;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4ba37b',
    borderRadius: 50,
    marginTop: 100,
    width: 100
  }
});
