import { Text, StyleSheet, TouchableOpacity, View } from "react-native"

type AppBotoesProps = {
  onPressBuscar: () => void;
  onPressLimpar: () => void;
  loading?: boolean;
}

function AppBotoes({ onPressBuscar, onPressLimpar, loading }: AppBotoesProps) {
  return (
    <View style={styles.areaBtn}>
      <TouchableOpacity style={[styles.btn, styles.btnBuscar]} onPress={onPressBuscar} disabled={loading}>
        <Text style={styles.textBtn}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnLimpar]} onPress={onPressLimpar} disabled={loading}>
        <Text style={styles.textBtn}>Limpar</Text>
      </TouchableOpacity>
    </View>
  )
}

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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnBuscar: {
    backgroundColor: '#1d75cd',
  },
  btnLimpar: {
    backgroundColor: '#cd3e1d',
  },
  textBtn: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  }
});