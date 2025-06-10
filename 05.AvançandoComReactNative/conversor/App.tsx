import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import PickerItem from './src/components/PickerItem';
import { Moeda } from './src/model/moeda.model';
import { useEffect, useState } from 'react';
import api from './src/services/api';

export default function App() {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState(true);

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
      const dataAsArray: Moeda[] = Object.keys(result.data).map(key => result.data[key]);
      setMoedas(dataAsArray);
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
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem moedas={moedas} />
      </View>
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
    alignItems: 'center'

  },
  areaMoeda: {
    backgroundColor: 'rgb(249, 249, 249)',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8
  },
  titulo: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
    fontWeight: 500,
    paddingLeft: 5,
    paddingTop: 5,
  }
});
