import { Keyboard } from "react-native";
import { AuthUseFormType } from "./auth.setters";

function cleanUp(states: AuthUseFormType) {
  states.setEmail("");
  states.setPassword("");
  Keyboard.dismiss(); // Fecha o teclado
}

export default cleanUp;