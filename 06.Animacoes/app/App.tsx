
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './src/components/Exemplo01';
import Exemplo02 from './src/components/Exemplo02';
import Exemplo03 from './src/components/Exemplo03';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Exemplo01 /> */}
      {/* <Exemplo02 /> */}
      <Exemplo03 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (StatusBar.currentHeight || 0) + 5, // Adjust for status bar height
  },
});
