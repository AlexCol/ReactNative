import { Alert } from "react-native";
import api from "../../../services/api";
import { SignUpStates } from "../states";
import clearSignUpRefs from "./clearSignUpRefs";

export default async function signUp(signUpStates: SignUpStates) {
  const { nomeRef, emailRef, passwordRef, confirmPasswordRef } = signUpStates;
  const name = nomeRef.current;
  const email = emailRef.current;
  const password = passwordRef.current;
  const confirmPassword = confirmPasswordRef.current;

  if (!name || !email || !password || !confirmPassword) {
    Alert.alert("Atenção: ", "Preencha todos os campos.");
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert("Atenção: ", "As senhas não coincidem.");
    return;
  }

  signUpStates.setIsLoading(true);
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await api({
    method: "post",
    url: "/users",
    data: {
      name,
      email,
      password,
      confirm_password: confirmPassword,
    }
  });
  signUpStates.setIsLoading(false);

  if (!data)
    return; // API will handle error alert and console log

  return { email, password };
}