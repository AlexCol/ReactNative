import { View } from "react-native";
import styles from "./styles";
import { useAuthValue } from "../../contexts/AuthContext";
import useSignInStates from "./states";
import Logo from "./components/Logo";
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView";
import Inputs from "./components/Inputs";
import LoginButtons from "./components/LoginButtons";

function SignIn() {
  const contexto = useAuthValue();
  const states = useSignInStates();

  console.log("SignIn renderizado");
  return (
    <View className={styles.background}>
      <MyKeyboardAvoidingView>
        <Logo />
        <Inputs signInStates={states} />
        <LoginButtons contexto={contexto} states={states} />
      </MyKeyboardAvoidingView>
    </View>
  )
}
export default SignIn;