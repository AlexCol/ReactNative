import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import maskCep from './src/Utils/MaskCep';
import AppTitulo from './src/components/app/App.titulo';
import AppInput from './src/components/app/App.input';
import AppBotoes from './src/components/app/App.botoes';
import AppResultado from './src/components/app/App.resultado';
import { ViaCepResponse } from './src/Model/ViaCepResponse';
import appHandleBuscar from './src/components/app/functions/App.handleBuscar';
import appHandleLimpar from './src/components/app/functions/App.handleLimpar';

export default function App() {
  const [cep, setCep] = useState('');
  const [showResultado, setShowResultado] = useState(false);
  const [endereco, setEndereco] = useState<ViaCepResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => setCep(maskCep(text)); /*¹*/
  const handleBuscar = async () => await appHandleBuscar({ cep, setLoading, setEndereco, setShowResultado });
  const handleLimpar = () => appHandleLimpar({ setCep, setShowResultado, inputRef });

  return (
    <View style={styles.container}>
      <AppTitulo />

      <AppInput cep={cep} handleChange={handleChange} ref={inputRef} />

      <AppBotoes onPressBuscar={handleBuscar} onPressLimpar={handleLimpar} loading={loading} />

      {showResultado && <AppResultado endereco={endereco} />}
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

/*
¹
pra usar a máscara de CEP, é preciso usar useState
pois se tentar usar useRef, o valor em tela não será atualizado
e a máscara não funcionará corretamente
a máscara de CEP deve ser aplicada no valor do input
*/