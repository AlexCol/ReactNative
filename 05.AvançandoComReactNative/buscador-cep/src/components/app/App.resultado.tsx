import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ViaCepResponse } from '../../Model/ViaCepResponse'

type AppResultadoProps = {
  endereco: ViaCepResponse | null;
}

function AppResultado({ endereco }: AppResultadoProps) {
  if (!endereco) {
    return null;
  }

  if (endereco.erro) {
    return (
      <View style={styles.resultado}>
        <Text style={styles.textoResultado}>CEP não encontrado!</Text>
      </View>
    )
  }

  return (
    <View style={styles.resultado}>
      <Text style={styles.textoResultado}>CEP: {endereco.cep}</Text>
      <Text style={styles.textoResultado}>Rua: {endereco.logradouro}</Text>
      <Text style={styles.textoResultado}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.textoResultado}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.textoResultado}>Estado: {endereco.uf}</Text>
    </View>
  )
}

export default AppResultado;

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 22
  }
});