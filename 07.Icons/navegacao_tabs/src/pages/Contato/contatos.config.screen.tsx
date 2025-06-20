import Contato from ".";
import { TabScreenConfig } from "../../routes/TabScreenConfig";
import { Feather } from '@expo/vector-icons';

const ContatosScreenConfig: TabScreenConfig = {
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
    tabBarIcon: ({ color, size }) => (
      <Feather name="phone-call" size={size} color={color} />
    ),
  },
}
export default ContatosScreenConfig;
