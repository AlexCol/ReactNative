import { User } from "firebase/auth";
import { auth } from "../../database";
import trataErro from "../auth/auth.trataErro";

async function handleLogout(setAuthUser: React.Dispatch<React.SetStateAction<User | null | undefined>>) {
  try {
    await auth.signOut();
    alert("Usuário deslogado com sucesso");
    setAuthUser(null);
  } catch (error) {
    trataErro(error);
  }
}

export default handleLogout;