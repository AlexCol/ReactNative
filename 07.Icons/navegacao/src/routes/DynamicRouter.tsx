import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import { RootStackParamList } from "./_RootStackParamList";
import Contato from "../pages/Contato";

const Stack = createNativeStackNavigator<RootStackParamList>(); //forma dinamica,

function DynamicRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {HomeScreenConfig()}
        {SobreScreenConfig()}
        {ContatosScreenConfig()}
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

function SobreScreenConfig() {
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

function ContatosScreenConfig() {
  return <Stack.Screen
    name="Contatos"
    component={Contato}
    options={{
      title: 'Tela Contatos',
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