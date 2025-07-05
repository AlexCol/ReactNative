import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import { JSX } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
  Login: undefined;
};
export type NavigationProp = NativeStackNavigationProp<StackParamList>;

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
function StackNavigator(arg0: { Home: { screen: () => JSX.Element; }; Cadastro: { screen: () => JSX.Element; }; Login: { screen: () => JSX.Element; }; }) {
  throw new Error('Function not implemented.');
}

