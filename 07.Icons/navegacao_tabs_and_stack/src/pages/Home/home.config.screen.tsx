import Home from '.';
import { TabScreenConfig } from '../../routes/TabScreenConfig';
import { Feather } from '@expo/vector-icons';
import HomeStackRoutes from './HomeStack/HomeStackRoutes';

const HomeScreenConfig: TabScreenConfig = {
  name: "HomeRootStack",
  component: HomeStackRoutes,
  options: {
    title: 'Stack',
    headerStyle: {
      backgroundColor: 'orange', // cor do header
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