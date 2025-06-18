import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import { RootStackParamList } from "./_RootStackParamList";
import Contato, { ContatosScreenConfig } from "../pages/Contato";

export type stackType = ReturnType<typeof createNativeStackNavigator<RootStackParamList>>; //isso aqui pra mim poder criar as configs em metodos fora desse arquivo
const Stack: stackType = createNativeStackNavigator<RootStackParamList>(); //forma dinamica,

function DynamicRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {HomeScreenConfig()}
        {SobreScreenConfig(Stack)}
        {ContatosScreenConfig(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default DynamicRouter;

function HomeScreenConfig() {
  return <Stack.Screen
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
}

function SobreScreenConfig(Stack: stackType) { //exemplo criando a configuração da tela Sobre fora do componente
  return <Stack.Screen
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
}