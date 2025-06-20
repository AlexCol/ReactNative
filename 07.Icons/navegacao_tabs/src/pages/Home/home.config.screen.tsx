import Home from '.';
import { TabScreenConfig } from '../../routes/TabScreenConfig';
import { Feather } from '@expo/vector-icons';

const HomeScreenConfig: TabScreenConfig = {
  name: "Home",
  component: Home,
  options: {
    title: 'Tela Inicial',
    headerStyle: {
      backgroundColor: '#6200ee', // cor do header
    },
    headerTintColor: '#fff', //cor da fonte do header
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false, // desabilita o header
    tabBarIcon: ({ color, size }) => (
      <Feather name="home" size={size} color={color} />
    ),
  },
}
export default HomeScreenConfig;