import Home from '.';
import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from '../../routes/types/DrawerScreenConfig';

const HomeScreenConfig: DrawerScreenConfig = {
  name: "Home",
  component: Home,
  options: {
    title: 'Tela Inicial',
    drawerLabel: 'Início', // nome que aparece no menu lateral
    headerStyle: {
      backgroundColor: '#6200ee', // cor do header
    },
    headerTintColor: '#fff', //cor da fonte do header
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShown: true, // desabilita o header
    drawerIcon: ({ color, size }) => (
      <Feather name="home" size={size} color={color} />
    ),
  },
}
export default HomeScreenConfig;