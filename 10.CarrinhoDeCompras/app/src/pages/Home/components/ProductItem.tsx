import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Product } from "../../../model/Product";

type ProductItemProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductItem({ product, onAddToCart }: ProductItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.produtoContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onAddToCart(product)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333',
    margin: 8,
  },
  produtoContainer: {
    padding: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 3,
    backgroundColor: '#290ab4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  }
});