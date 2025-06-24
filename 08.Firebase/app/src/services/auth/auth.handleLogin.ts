import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthUseFormType } from "./auth.setters";
import cleanUp from "./auth.cleanUp";
import trataErro from "./auth.trataErro";
import { auth } from "../../database";

async function handleLogin(states: AuthUseFormType) {
  try {
    const UserCredential = await signInWithEmailAndPassword(auth, states.email, states.password);
    alert("Usuário logado com sucesso: " + UserCredential.user.email);
    cleanUp(states);
    states.setAuthUser(UserCredential.user);
  } catch (error) {
    trataErro(error);
  }
}

export default handleLogin;