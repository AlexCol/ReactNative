import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { RootStackParamList } from "./_RootStackParamList";
import { NavigationContainer } from "@react-navigation/native";
import SobreScreenConfig from "../pages/Sobre/sobre.config.screen";
import ContatosScreenConfig from "../pages/Contato/contatos.config.screen";
import HomeScreenConfig from "../pages/Home/home.config.screen";
import CustomDrawer from "../components/CustomDrawer";

//BottomTabNavigationOptions
const DrawerScreenConfig: DrawerNavigationOptions = {
  //headerShown: false,
  drawerStyle: {
    backgroundColor: 'rgba(179, 8, 142, 0.9)',
    width: 250,
  },
  drawerItemStyle: { //por padrão a o fundo vem com borderRadius aprox 25, se quiser mudar, usar drawerItemStyle
    marginVertical: 5,
    borderRadius: 10,
  },

  drawerActiveTintColor: '#fff',
  drawerActiveBackgroundColor: 'blue',

  drawerInactiveTintColor: 'gray',
  //drawerInactiveBackgroundColor: 'gray',
}

const Drawer = createDrawerNavigator<RootStackParamList>();

const componentsList = [
  HomeScreenConfig,
  SobreScreenConfig,
  ContatosScreenConfig,
]

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={DrawerScreenConfig}
        drawerContent={CustomDrawer} // caso não queira usar o padrão do Drawer, pode usar o CustomDrawer
      >
        {componentsList.map((item) => (
          <Drawer.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}