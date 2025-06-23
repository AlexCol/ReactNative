import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../database";
import IUser from "../../model/IUser";
import { AppUseFormType } from "./app.setters";

export async function editUser(editUser: IUser, states: AppUseFormType): Promise<void> {
  const { setId, setLoading } = states;

  setLoading(true);
  try {
    if (!editUser.id || !editUser.nome || !editUser.idade || !editUser.cargo) {
      throw new Error("User data is incomplete: " + JSON.stringify(editUser));
    }
    const dadosUsuario = {
      nome: editUser.nome,
      idade: editUser.idade,
      cargo: editUser.cargo
    };

    const editDoc = doc(db, "users", editUser.id);
    await setDoc(editDoc, dadosUsuario);

    setId(editUser.id);
  } catch (error) {
    console.error('Error registering user:', error);
    setId(""); // Limpa o ID após o registro
  } finally {
    setLoading(false);
  }
}