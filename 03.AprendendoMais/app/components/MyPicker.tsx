import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native"

type Pizza = {
  preco: number,
  sabor: string
}

function formataValor(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(valor);
}

function MyPicker() {
  const [pizzaIndex, setPizzaIndex] = useState(0);

  const pizzasDisponiveis: Pizza[] = [
    { preco: 59.90, sabor: 'Calabresa' },
    { preco: 55.90, sabor: 'Frango' },
    { preco: 63.90, sabor: 'Coração' },
    { preco: 59.90, sabor: 'Brigadeiro' },
  ]

  // function montaItensPicker(pizzas: Pizza[]) {
  //   return pizzas.map((pizza, index) => (
  //     <Picker.Item key={index} value={index} label={pizza.sabor} />
  //   ))
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker selectedValue={pizzaIndex} onValueChange={(itemValue) => setPizzaIndex(itemValue)}>
        {/* {montaItensPicker(pizzasDisponiveis)} */}
        {
          pizzasDisponiveis.map((pizza, index) => (
            <Picker.Item key={index} value={index} label={pizza.sabor} />
          ))
        }
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: {pizzasDisponiveis[pizzaIndex].sabor}</Text>
      <Text style={styles.pizzas}>R$: {formataValor(pizzasDisponiveis[pizzaIndex].preco)}</Text>
    </View>
  )
}

export default MyPicker

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});