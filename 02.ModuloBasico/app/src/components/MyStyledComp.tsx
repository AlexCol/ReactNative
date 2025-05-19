import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

function MyStyledComp() {
  return (
    <View style={styles.area}>
      <Text style={styles.texto}>Eu sou texto 1</Text>
      <Text style={[styles.texto, styles.alinha]}>Eu sou texto 2 - Alinhado</Text>
    </View>
  )
}

const areaStyle: StyleProp<ViewStyle> = {
  marginTop: 20,
  backgroundColor: "gray",
  //  height: 60 //com esse espaço comentado, a view cresce junto dos componentes
};
const textoStyle: StyleProp<TextStyle> = {
  opacity: 0.5,
  backgroundColor: 'red',
  color: 'white',
  fontSize: 25
};

const alinhaTexto: StyleProp<TextStyle> = {
  textAlign: 'center'
}

const styles = StyleSheet.create({
  area: areaStyle,
  texto: textoStyle,
  alinha: alinhaTexto
});

export default MyStyledComp