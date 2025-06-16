import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Tela Inicial',
              headerStyle: {
                backgroundColor: '#6200ee', // cor do header
              },
              headerTintColor: '#fff', //cor da fonte do header
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: true, // exibe o header
            }}
          />

          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{
              title: 'Tela Sobre',
              headerStyle: {
                backgroundColor: '#ee0062',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
