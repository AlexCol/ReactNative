import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function AppTitulo() {

  return (
    <View style={styles.tituloApp}>
      <Text>Buscador de CPF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloApp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
