import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native"

function MyScrollView() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false} //faz com que a barra de rolagem não seja visivel na vertial (tem uma própria pra horizontal)
    //scrollEnabled={false} //desabilita a barra de rolagem
    //horizontal={true} //faz com que os itens dentro do ScrollView se alinhem horizontalmente
    >
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </ScrollView>
  )
}

const baseBox: StyleProp<ViewStyle> = {
  height: 250,
  //width: 150,
}
const container: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: '#fff',
  //alignItems: 'center', //isso tbm achata os componentes, se não houver texto, as views podem sumir
  justifyContent: 'center',
}

const styles = StyleSheet.create({
  container: container,
  box1: {
    ...baseBox,
    backgroundColor: 'red'
  },
  box2: {
    ...baseBox,
    backgroundColor: 'green'
  },
  box3: {
    ...baseBox,
    backgroundColor: 'yellow'
  },
  box4: {
    ...baseBox,
    backgroundColor: 'blue'
  }
});

export default MyScrollView