import { useState } from "react"
import { Switch, View, Text, StyleSheet } from "react-native"

function MySwitch() {
  const [valor, setValor] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valor: {valor ? "Ligado" : "Desligado"}</Text>
      <Switch
        trackColor={{ false: "gray", true: "green" }} // Cor do track quando o switch está desligado e ligado
        thumbColor="purple" // Cor do thumb (círculo que desliza)
        ios_backgroundColor="lightgray" // Cor de fundo no iOS quando o switch está desligado
        onValueChange={(value) => setValor(value)}
        value={valor}
        style={styles.switch} // Estilo do switch
      />
    </View>
  )
}

export default MySwitch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    //flexDirection: "row",
  },
  switch: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "black",
  },
})