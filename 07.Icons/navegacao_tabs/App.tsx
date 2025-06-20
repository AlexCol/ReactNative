import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    //alignItems: 'center', //ao usar navigators, não pode ter esse alinhamento
  },
});
