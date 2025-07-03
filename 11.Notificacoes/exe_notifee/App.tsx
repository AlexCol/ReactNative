
import { StyleSheet, View } from 'react-native';
import MyNotificator from './src/Notificator/MyNotificator';
import addEventoParaAppDesligado from './src/Notificator/functions/addEventoParaAppDesligado';

export default function App() {
  return (
    <View style={styles.container}>
      <MyNotificator />
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
