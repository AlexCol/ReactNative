import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../database";

export default async function deleteUser(userId: string): Promise<void> {
  if (!userId) {
    alert("ID do usuário não fornecido!");
    return;
  }

  const docRef = doc(db, "users", userId);
  try {
    await deleteDoc(docRef);
    alert("Usuário excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    alert("Erro ao excluir usuário. Tente novamente.");
  }

}