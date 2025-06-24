import { createUserWithEmailAndPassword } from "@firebase/auth";
import { AuthUseFormType } from "./auth.setters";
import cleanUp from "./auth.cleanUp";
import trataErro from "./auth.trataErro";
import { auth } from "../../database";

async function handleCreateUser(states: AuthUseFormType) {
  try {
    const UserCredential = await createUserWithEmailAndPassword(auth, states.email, states.password);
    alert("Usuário criado com sucesso: " + UserCredential.user.email);
    cleanUp(states);
    states.setAuthUser(UserCredential.user);
  } catch (error) {
    trataErro(error);
  }
}

export default handleCreateUser;