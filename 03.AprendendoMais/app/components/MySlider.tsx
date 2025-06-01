import Slider from "@react-native-community/slider"
import { useState } from "react"
import { StyleSheet, View, Text } from "react-native"

function MySlider() {
  const [valor, setValor] = useState(50)
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={valor}
        minimumTrackTintColor="green" // Cor do track mínimo (atrás do thumb)
        maximumTrackTintColor="purple" // Cor do track máximo (à frente do thumb)
        thumbTintColor="red" // Cor do thumb (círculo que desliza)
        onValueChange={(value) => setValor(value)}
        onSlidingStart={() => console.log("Iniciando a mudança")}
        onSlidingComplete={() => console.log("Mudança concluída")}
      />

      <Text style={styles.text}>Valor: {valor}</Text>
    </View>
  )
}

export default MySlider

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  slider: {
    width: 300,
    height: 40,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "black",
  },
});