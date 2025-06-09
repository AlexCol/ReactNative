import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import { Filme } from "../model/filme.model"
import FilmeCompBotao from "./FilmeCompBotao"
import { useState } from "react"
import FilmeCompModal from "./FilmeCompModal"

type FilmeProps = {
  filme: Filme
}

function FilmeComp({ filme }: FilmeProps) {
  const modalState = useState(false);
  const [modalVisible, setModalVisible] = modalState;

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{filme.nome}</Text>

        <Image
          style={styles.foto}
          source={{ uri: filme.foto }}
        />

        <FilmeCompBotao onPressProp={() => { setModalVisible(true) }} />
      </View>

      <FilmeCompModal visibleState={modalState} filme={filme} />
    </View>
  )
}

export default FilmeComp

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 15,
    elevation: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  foto: {
    height: 250,
    zIndex: 2,
  }
});