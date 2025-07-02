import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { useCartContext } from '../../context/CartContext';
import ProductOnCart from './components/ProductOnCart';

function Cart() {
  const { productsOnCart, addToCart, removeFromCart } = useCartContext();
  const total = useMemo(() => productsOnCart.reduce((total, item) => total + item.product.price * item.quantity, 0), [productsOnCart]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scrollContainer}
        data={productsOnCart}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductOnCart product={item} addToCart={addToCart} removeFromCart={removeFromCart} />}
        keyExtractor={(item) => item.product.id.toString()}
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', padding: 16 }}>Seu carrinho está vazio</Text>}
      />

      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>
          Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Text>
      </View>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});