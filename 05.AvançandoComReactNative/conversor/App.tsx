import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PickerItem from './src/components/PickerItem';
import { Moeda } from './src/model/moeda.model';
import { useEffect, useRef, useState } from 'react';
import api from './src/services/api';
import fetchMoedas from './App.fetchMoedas';
import converteValor from './App.converteValor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState<Moeda>({} as Moeda);
  const inputRef = useRef<TextInput>(null);
  const textRef = useRef<string>('');
  const [valorConvertido, setValorConvertido] = useState<string>('');
  const [convertido, setConvertido] = useState(false);

  useEffect(() => {
    const fetchParams = {
      setMoedas,
      setMoedaSelecionada,
      setLoading,
    }
    fetchMoedas(fetchParams);
  }, []);

  function mudaMoeda(moeda: Moeda) {
    limpar();
    setMoedaSelecionada(moeda);
  }

  function converter() {
    const valor = textRef.current;
    converteValor({ valor, moedaSelecionada, setValorConvertido });
    setConvertido(true);
  }

  function limpar() {
    textRef.current = '';
    setValorConvertido('');
    inputRef.current?.focus();
    inputRef.current?.clear();
    setConvertido(false);
  }

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="purple" />
        <Text style={{ color: 'purple' }}>Carregando moedas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Parar o Picker */}
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem moedas={moedas} moedaSelecionada={moedaSelecionada} onChange={mudaMoeda} />
      </View>

      {/* Area onde o usuário digita o valor */}
      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 1.5'
          keyboardType='numeric'
          readOnly={convertido}
          ref={inputRef}
          onChangeText={(text) => textRef.current = text} // Atualiza o valor do TextInput
        />
      </View>

      {/* Botão de converter */}
      <TouchableOpacity style={styles.botaoArea} onPress={() => convertido ? limpar() : converter()}>
        <Text style={styles.botaoTexto}>{convertido ? "Limpar" : "Converter"}</Text>
      </TouchableOpacity>

      {/* Resultado da conversão */}
      {
        valorConvertido && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>{textRef.current} {moedaSelecionada.code}</Text>
            <Text style={{ fontSize: 18, margin: 8, fontWeight: '500' }}>corresponde a</Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )
      }

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(16, 18, 21)',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 0,
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 0,
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: 'rgb(249, 249, 249)',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 1
  },
  titulo: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
    fontWeight: 500,
    paddingLeft: 5,
    paddingTop: 5,
  },
  areaValor: {
    backgroundColor: 'rgb(249, 249, 249)',
    width: '90%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: 'rgb(0, 0, 0)',
  },
  botaoArea: {
    width: '90%',
    backgroundColor: 'rgb(251, 75, 87)',
    height: '7%',
    //height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaoTexto: {
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaResultado: {
    width: '90%',
    backgroundColor: 'rgb(249, 249, 249)',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  valorConvertido: {
    fontSize: 28,
    color: 'rgb(0,0,0)',
    fontWeight: 'bold'
  }
});
