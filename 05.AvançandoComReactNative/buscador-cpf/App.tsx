import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import maskCep from './src/Utils/MaskCep';
import AppTitulo from './src/components/app/App.titulo';
import AppInput from './src/components/app/App.input';
import AppBotoes from './src/components/app/App.botoes';

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
      <AppTitulo />

      <AppInput cep={cep} handleChange={handleChange} />

      <AppBotoes />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  }
});
