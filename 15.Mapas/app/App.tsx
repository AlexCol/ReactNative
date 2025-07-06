import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import pedePermissao from './src/functions/pedePermissao';
import SimpleMap from './src/SimpleMap';
import SimpleMap2 from './src/SimpleMap2';
import SimpleMap3 from './src/SimpleMap3';
import SimpleMap4 from './src/SimpleMap4';

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
      <StatusBar hidden />
      <Text>Projeto Mapas</Text>

      {/* Exemplo bem cru */}
      {/* <SimpleMap /> */}

      {/* Reposicionamento com botoes */}
      {/* <SimpleMap2 /> */}

      {/* Exemplo com eventos (onMapReady, onRegionChange, etc) */}
      {/* <SimpleMap3 /> */}

      {/*Propriedades*/}
      <SimpleMap4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

