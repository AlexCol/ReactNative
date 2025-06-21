import Sobre from ".";

import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from "../../routes/DrawerScreenConfig";

const SobreScreenConfig: DrawerScreenConfig = {
  name: "Sobre",
  component: Sobre,
  options: {
    title: 'Tela Sobre',
    headerStyle: {
      backgroundColor: '#ee0062',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false, // desabilita o header
    drawerIcon: ({ color, size }) => (
      <Feather name="file-text" size={size} color={color} />
    ),
  },
}
export default SobreScreenConfig;