import Contato from ".";
import { Feather } from '@expo/vector-icons';
import { DrawerScreenConfig } from "../../routes/DrawerScreenConfig";

const ContatosScreenConfig: DrawerScreenConfig = {
  name: "Contatos",
  component: Contato,
  options: {
    title: 'Tela Contatos',
    headerStyle: {
      backgroundColor: '#808000', // cor do header
    },
    headerTintColor: '#fff', // cor da fonte do header
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false, // desabilita o header
    drawerIcon: ({ color, size }) => (
      <Feather name="phone-call" size={size} color={color} />
    ),
  },
}
export default ContatosScreenConfig;
