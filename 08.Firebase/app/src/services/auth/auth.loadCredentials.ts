import { onAuthStateChanged, User, UserCredential } from "@firebase/auth";
import { auth } from "../../database";
import { AuthUseFormType } from "./auth.setters";

type loadCredentialsProps = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

export default async function loadCredentials({ user, setUser }: loadCredentialsProps) {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuário logado:", user.email);
      setUser(user);
      return;
    }
  });

}