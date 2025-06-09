import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Filme } from "../model/filme.model";

type FilmeCompModalProps = {
  visibleState: [boolean, (value: boolean) => void],
  filme: Filme,
}

function FilmeCompModal({ visibleState, filme }: FilmeCompModalProps) {
  const [visible, setVisible] = visibleState;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>

          <TouchableOpacity style={styles.btnVoltar} onPress={() => setVisible(false)}>
            <Text style={{ color: 'white', fontSize: 16 }}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.titulo}>{filme.nome}</Text>
          <Text style={styles.sinopse}>Sinopse:</Text>
          <Text style={styles.descricao}>{filme.sinopse}</Text>
        </View>
      </View>
    </Modal>
  )
}

export default FilmeCompModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
  }
});