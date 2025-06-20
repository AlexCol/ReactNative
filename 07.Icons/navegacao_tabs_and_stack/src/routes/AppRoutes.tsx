import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList } from "./_RootStackParamList";
import ContatosScreenConfig from "../pages/Contato/contatos.config.screen";
import HomeScreenConfig from "../pages/Home/home.config.screen";
import SobreScreenConfig from "../pages/Sobre/sobre.config.screen";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import StackRoutes from "../pages/Home/HomeStack/HomeStackRoutes";

export type tabType = ReturnType<typeof createBottomTabNavigator<RootStackParamList>>; //isso aqui pra mim poder criar as configs em metodos fora desse arquivo
const Tab: tabType = createBottomTabNavigator<RootStackParamList>(); //forma dinamica,

const mainTabComponentsList = [
  HomeScreenConfig, //removinda daqui pois ela está no StackRoutes, que é o que está sendo usado na tela inicial
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
  },
  tabBarButton(props) { //usando Pressable para o botão da tab bar, que é o padrão do React Navigation 6
    return <Pressable
      {...(props as any)} // isso é necessário para evitar erros de tipagem, pois o Pressable não aceita o tipo BottomTabBarButtonProps diretamente
      android_ripple={{ radius: 80, color: 'gray' }} // efeito de ripple no Android
    />
  },
}

function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={navigationOptions}>
        {mainTabComponentsList.map((ScreenConfig) => (
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

/*
  tabBarButton(props) { //usando Pressable para o botão da tab bar, que é o padrão do React Navigation 6
    return <Pressable
      {...(props as any)} // isso é necessário para evitar erros de tipagem, pois o Pressable não aceita o tipo BottomTabBarButtonProps diretamente
      android_ripple={{ radius: 0 }} // efeito de ripple no Android
    />
  },
  tabBarButton: (props) => { //usando TouchableOpacity para o botão da tab bar
    return <TouchableOpacity // isso é necessário para evitar erros de tipagem, pois o TouchableOpacity não aceita o tipo BottomTabBarButtonProps diretamente
      {...(props as any)}
      activeOpacity={0.7}
    />
  }

adicionado any a props para evitar erro de tipagem, pois o TouchableOpacity não aceita o tipo BottomTabBarButtonProps diretamente.
devido alguns pontos, como por exemplo o campo disabled de um vir como 'boolean|undefined' e o outro como 'boolean|undefined|null', o que causa conflito de tipos.
e como não é o que vou mexer, só quero jogar de um para o outro, não tem problema, o que for usado fora, como o activeOpacity continua na tipagem correta.
*/