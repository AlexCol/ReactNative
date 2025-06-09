
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Filme } from './src/model/filme.model';
import api from './src/services/api';
import FilmeComp from './src/components/FilmeComp';

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilmes() {
      setLoading(true);
      const response = await api.get<Filme[]>('r-api/?api=filmes');

      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um atraso de 2 segundos

      if (response.status === 200) {
        setFilmes(response.data);
      } else {
        console.error('Erro ao buscar filmes:', response.statusText);
      }
      setLoading(false);
    }
    fetchFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff0000" />
        <Text>Carregando filmes...</Text>
      </View>
    );
  }

  if (!loading && filmes.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmeComp filme={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 126)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 0,
  },
  flatList: {
    width: '100%'
  }
});
