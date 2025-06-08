import { Image, Modal, StyleSheet, View, Text } from "react-native";
import MyButton from "./MyButton";
import MyImage from "./MyImage";

type MyModalProps = {
  evaluation: number;
  gasPrice: string;
  alcoholPrice: string;
  onClose: () => void;
  visible?: boolean;
}

function MyModal({ evaluation, gasPrice, alcoholPrice, onClose, visible }: MyModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.container}>
        <MyImage
          source={require('../../../assets/imgs/gas.png')}
        />
        <Text style={styles.cabecalho}>
          {evaluation < 0.7
            ? 'Compensa usar Álcool'
            : 'Compensa usar Gasolina'}
        </Text>

        <Text style={styles.precosCabecalho}>
          Com preços:
        </Text>

        <Text style={styles.precos}>
          Álcool: R$ {parseFloat(alcoholPrice).toFixed(2)}
        </Text>

        <Text style={styles.precos}>
          Gasolina: R$ {parseFloat(gasPrice).toFixed(2)}
        </Text>

        <MyButton
          label="Recalcular"
          onPress={onClose}
        />
      </View>
    </Modal>
  )
}

export default MyModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', //inportante, pois temos uma view mãe, então precisamos defirnir a largura dessa (filha) para que a largura das filhas dessa não deem problema
  },
  cabecalho: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
  },
  precosCabecalho: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  precos: {
    color: 'white',
    fontSize: 17,
    marginBottom: 10,
  }
});