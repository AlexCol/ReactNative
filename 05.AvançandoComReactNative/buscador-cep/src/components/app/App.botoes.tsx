import { Text, StyleSheet, TouchableOpacity, View } from "react-native"

function AppBotoes() {
  return (
    <View style={styles.areaBtn}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Outro</Text>
      </TouchableOpacity>
    </View>
  )
}

/*
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>OutraCoisa</Text>
      </TouchableOpacity>
*/

export default AppBotoes;

const styles = StyleSheet.create({
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  btn: {
    height: 50,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'red'
  },
  textBtn: {
    fontSize: 22,
  }
});