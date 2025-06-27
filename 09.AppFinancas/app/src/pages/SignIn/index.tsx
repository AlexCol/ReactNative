import { View } from "react-native";
import styles from "./styles";
import useSignInStates from "./states";
import SignInLogo from "./components/SignInLogo";
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView";
import SignInInputs from "./components/SignInInputs";
import React from "react";
import SignInButtons from "./components/SignInButtons";

function SignIn() {
  const states = useSignInStates();

  return (
    <View className={styles.background}>
      <MyKeyboardAvoidingView>
        <SignInLogo />
        <SignInInputs signInStates={states} />
        <SignInButtons signInStates={states} />
      </MyKeyboardAvoidingView>
    </View>
  )
}
export default SignIn;