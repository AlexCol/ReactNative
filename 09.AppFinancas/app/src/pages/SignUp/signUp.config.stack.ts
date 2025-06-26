import SignUp from ".";
import { StackScreenConfig } from "../../routes/types/StackScreenConfig";

const SignUpConfigStack: StackScreenConfig = {
  name: "SignUp",
  component: SignUp,
  options: {
    title: 'Tela SignUp',
    headerStyle: {
      backgroundColor: '#808000', // cor do header
    },
    headerTintColor: '#fff', // cor da fonte do header
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false, // desabilita o header    
  },
}
export default SignUpConfigStack;
