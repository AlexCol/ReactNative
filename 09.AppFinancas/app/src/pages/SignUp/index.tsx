import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../SignIn/styles"
import { SignNavigationProp } from "../../routes/SignInStack/_SignInStackParamList";
import { useNavigation } from "@react-navigation/native";
import SignUpInputs from "./components/SignUpInputs";
import useSignUpStates from "./states";
import SignUpButton from "./components/SignUpButton";
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView";

function SignUp() {
  const states = useSignUpStates();

  return (
    <View className={styles.background}>
      <MyKeyboardAvoidingView>
        <SignUpInputs signUpStates={states} />
        <SignUpButton signUpStates={states} />
      </MyKeyboardAvoidingView>
    </View>
  )
}

export default SignUp