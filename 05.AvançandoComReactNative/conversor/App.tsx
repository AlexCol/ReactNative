import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PickerItem from './src/components/PickerItem';
import { Moeda } from './src/model/moeda.model';
import { useEffect, useRef, useState } from 'react';
import api from './src/services/api';

export default function App() {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState<Moeda>({} as Moeda);
  const inputRef = useRef<TextInput>(null);
  const textRef = useRef<string>('');
  const [valor, setValor] = useState<string>('');

  console.log('redered');

  useEffect(() => {
    const fetchMoedas = async () => {
      setLoading(true);
      //await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um delay de 2 segundos

      const result = await api.get<{ [key: string]: Moeda }>('all');
      if (result.status !== 200) {
        console.error('Erro ao buscar moedas:', result.status);
        return;
      }

      //const dataAsArray: Moeda[] = Object.values(result.data);
      const dataAsArray: Moeda[] = Object.keys(result.data).map(key => {
        result.data[key].name = result.data[key].name.split('/')[0].trim();
        return result.data[key]
      });
      setMoedas(dataAsArray);
      setMoedaSelecionada(dataAsArray[0]);
      setLoading(false);
    }

    fetchMoedas();
  }, []);

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
        <PickerItem moedas={moedas} moedaSelecionada={moedaSelecionada} onChange={setMoedaSelecionada} />
      </View>

      {/* Area onde o usuário digita o valor */}
      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 1.5'
          keyboardType='numeric'
          ref={inputRef}
          onChangeText={(text) => textRef.current = text} // Atualiza o valor do TextInput
        />
      </View>

      {/* Botão de converter */}
      <TouchableOpacity style={styles.botaoArea} onPress={() => setValor(textRef.current ?? '')}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>

      <Text style={{ color: 'white' }}>{valor}</Text>
    </View>
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
});
