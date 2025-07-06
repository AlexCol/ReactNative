import { StyleSheet, Text, View } from 'react-native';
import SimpleMap from './src/SimpleMap';
import { useEffect, useState } from 'react';
import pedePermissao from './src/functions/pedePermissao';

export default function App() {
  const [permitido, setPermitido] = useState(false);
  useEffect(() => {
    pedePermissao(setPermitido)
  }, []);

  if (!permitido) {
    return (
      <View style={styles.container}>
        <Text>Permissão de localização não concedida.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Projeto Mapas</Text>
      <SimpleMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

