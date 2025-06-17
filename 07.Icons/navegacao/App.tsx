import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import DynamicRouter from './src/routes/DynamicRouter';
import StaticRouter from './src/routes/StaticRouter';

export default function App() {
  return (
    <View style={styles.container}>
      <DynamicRouter />
      {/* <StaticRouter /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
