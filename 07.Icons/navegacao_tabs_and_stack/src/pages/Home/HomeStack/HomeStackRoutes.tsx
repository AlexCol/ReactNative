import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "..";

import Detalhes from "../../Detalhes";
import { RootHomeStackParamList } from "./_RootHomeStackParamList";

export type stackType = ReturnType<typeof createNativeStackNavigator<RootHomeStackParamList>>; //isso aqui pra mim poder criar as configs em metodos fora desse arquivo
const Stack: stackType = createNativeStackNavigator<RootHomeStackParamList>();

export default function HomeStackRoutes() {
  return (
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
        name="Detalhes"
        component={Detalhes}
        options={{
          title: 'Tela Detalhes',
          headerStyle: {
            backgroundColor: '#005562',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}