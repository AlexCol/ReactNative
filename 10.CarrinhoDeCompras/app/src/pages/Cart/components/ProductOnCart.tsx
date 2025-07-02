import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { CartProduct } from '../../../types/CartProduct'
import { Product } from '../../../model/Product'

type ProductOnCartProps = {
  product: CartProduct,
  addToCart: (produto: Product) => void,
  removeFromCart: (produto: Product) => void,
}

function ProductOnCart({ product, addToCart, removeFromCart }: ProductOnCartProps) {
  const add = () => addToCart(product.product);
  const remove = () => removeFromCart(product.product);

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.productName}>{product.product.name}</Text>
        <Text style={styles.productPrice}>{product.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      </View>

      <View style={styles.buttonsPanel}>
        <TouchableOpacity style={styles.addOrRemoveButton} onPress={remove}>
          <Text style={styles.addOrRemoveText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.total}>{product.quantity}</Text>

        <TouchableOpacity style={styles.addOrRemoveButton} onPress={add}>
          <Text style={styles.addOrRemoveText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductOnCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  labels: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  buttonsPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addOrRemoveButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 16,
  },
  addOrRemoveText: {
    fontSize: 18,
  },
  total: {
    marginHorizontal: 16,
    fontSize: 16,
  },
})
