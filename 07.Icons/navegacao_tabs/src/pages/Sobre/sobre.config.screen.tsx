import Sobre from ".";
import { TabScreenConfig } from "../../routes/TabScreenConfig";
import { Feather } from '@expo/vector-icons';

const SobreScreenConfig: TabScreenConfig = {
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
    tabBarIcon: ({ color, size }) => (
      <Feather name="file-text" size={size} color={color} />
    ),
  },
}
export default SobreScreenConfig;