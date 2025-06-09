import { StyleSheet, View, Image, Text } from "react-native"
import { Filme } from "../model/filme.model"

type FilmeProps = {
  filme: Filme
}

function FilmeComp({ filme }: FilmeProps) {
  return (
    <View>
      <Text>{filme.nome}</Text>
      <Text>{filme.sinopse}</Text>
      <Image source={{ uri: filme.foto }} />
    </View>
  )
}

export default FilmeComp

const styles = StyleSheet.create({

});