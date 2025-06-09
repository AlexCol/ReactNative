
import { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Filme } from './src/model/filme.model';
import api from './src/services/api';
import FilmeComp from './src/components/FilmeComp';

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    async function fetchFilmes() {
      const response = await api.get<Filme[]>('r-api/?api=filmes');
      if (response.status === 200) {
        setFilmes(response.data);
      } else {
        console.error('Erro ao buscar filmes:', response.statusText);
      }
    }
    fetchFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmeComp filme={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(126, 7, 126)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: StatusBar.currentHeight || 0,
  },
});
