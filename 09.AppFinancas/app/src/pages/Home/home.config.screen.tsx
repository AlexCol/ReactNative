import Home from '.';
import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from '../../routes/types/DrawerScreenConfig';

const HomeScreenConfig: DrawerScreenConfig = {
  name: "Home",
  component: Home,
  options: {
    drawerLabel: 'Minhas movimentações', // nome que aparece no menu lateral
    drawerIcon: ({ color, size }) => (
      <Feather name="home" size={size} color={color} />
    ),
  },
}
export default HomeScreenConfig;