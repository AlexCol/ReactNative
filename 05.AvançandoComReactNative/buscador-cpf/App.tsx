import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import maskCep from './src/Utils/MaskCep';

export default function App() {
  const [cep, setCep] = useState('');

  function handleChange(text: string) {
    //pra usar a máscara de CEP, é preciso usar useState
    //pois se tentar usar useRef, o valor em tela não será atualizado
    //e a máscara não funcionará corretamente
    //a máscara de CEP deve ser aplicada no valor do input
    setCep(maskCep(text));
  }

  return (
    <View style={styles.container}>
      <Text>Buscador de CPF</Text>
      <View>
        <TextInput
          placeholder='Informe seu cep:'
          maxLength={9}
          value={cep}
          onChangeText={handleChange}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  },
  inputArea: {}
});
