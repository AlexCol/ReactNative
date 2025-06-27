import { View } from "react-native";
import styles from "./styles";
import useSignInStates from "./states";
import Logo from "./components/Logo";
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView";
import Inputs from "./components/Inputs";
import LoginButtons from "./components/LoginButtons";

function SignIn() {
  const states = useSignInStates();

  return (
    <View className={styles.background}>
      <MyKeyboardAvoidingView>
        <Logo />
        <Inputs signInStates={states} />
        <LoginButtons signInStates={states} />
      </MyKeyboardAvoidingView>
    </View>
  )
}
export default SignIn;