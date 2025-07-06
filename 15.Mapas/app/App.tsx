import { StyleSheet, Text, View } from 'react-native';
import SimpleMap from './src/SimpleMap';

export default function App() {

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

