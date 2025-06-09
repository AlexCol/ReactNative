import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

type FilmeCompBotaoProps = {
  onPressProp: () => void
}

function FilmeCompBotao({ onPressProp }: FilmeCompBotaoProps) {
  return (
    <View style={styles.areaBotao}>
      <TouchableOpacity style={styles.botao} onPress={onPressProp}>
        <Text style={styles.textoBotao}>SAIBA MAIS</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilmeCompBotao;

const styles = StyleSheet.create({
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
  }
});