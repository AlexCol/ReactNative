import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../../../routes/_StackParamList';
import { HomeStates } from '../home.states';

type HeaderPros = {
  homeStates: HomeStates
}

function Header({ homeStates }: HeaderPros) {
  const count = homeStates.productsOnCart.length;
  const navigateToCart = () => homeStates.navigateToCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <TouchableOpacity onPress={navigateToCart}>
        <Feather name="shopping-cart" size={30} color="black" />
        {count > 0 &&
          <View style={styles.counterContainer}>
            <Text style={styles.counter} >{count}</Text>
          </View>
        }
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    color: 'white',
    fontSize: 10
  }
});

export default Header;