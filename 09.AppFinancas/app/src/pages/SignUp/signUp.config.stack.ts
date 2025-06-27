import SignUp from ".";
import { StackScreenConfig } from "../../routes/types/StackScreenConfig";

const SignUpConfigStack: StackScreenConfig = {
  name: "SignUp",
  component: SignUp,
  options: {
    headerTitle: 'Voltar',
    headerTintColor: '#fff', // cor da fonte do header
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: '',
    headerStyle: {
      backgroundColor: '#3B3BDF',
    },
    headerShown: true, // desabilita o header    
  },
}
export default SignUpConfigStack;
