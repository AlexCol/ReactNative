import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList } from "./_RootStackParamList";
import ContatosScreenConfig from "../pages/Contato/contatos.config.screen";
import HomeScreenConfig from "../pages/Home/home.config.screen";
import SobreScreenConfig from "../pages/Sobre/sobre.config.screen";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type tabType = ReturnType<typeof createBottomTabNavigator<RootStackParamList>>; //isso aqui pra mim poder criar as configs em metodos fora desse arquivo
const Tab: tabType = createBottomTabNavigator<RootStackParamList>(); //forma dinamica,

const componentsList = [
  HomeScreenConfig,
  SobreScreenConfig,
  ContatosScreenConfig
];

const navigationOptions: BottomTabNavigationOptions = {
  //headerShown: false, //caso queira desabilitar o header de todas as telas (ai não precisa colocar em cada config de tela)
  tabBarHideOnKeyboard: true, //esconde a tab bar quando o teclado está aberto
  tabBarShowLabel: false, //exibe o label na tab bar
  tabBarIconStyle: { justifyContent: 'center', alignItems: 'center', marginTop: 8 }, // ajuste o marginTop conforme necessário, pois sumir com as labels não centraliza os ícones
  tabBarActiveTintColor: 'white', // cor do ícone ativo
  tabBarStyle: {
    backgroundColor: '#202225', // cor de fundo da tab bar
    borderTopWidth: 0, // remove a borda superior
  }
}

function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={navigationOptions}
      >
        {componentsList.map((ScreenConfig) => (
          <Tab.Screen
            key={ScreenConfig.name}
            name={ScreenConfig.name}
            component={ScreenConfig.component}
            options={ScreenConfig.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes;