//import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
