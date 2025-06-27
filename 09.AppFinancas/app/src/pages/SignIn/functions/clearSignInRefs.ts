import { Keyboard } from "react-native";
import { SignInStates } from "../states";

export default function clearSignInRefs(states: SignInStates) {
  states.emailRef.current = "";
  states.passwordRef.current = "";
  states.emailInputRef.current.clear();
  states.passwordInputRef.current.clear();
  Keyboard.dismiss(); // Fecha o teclado
}