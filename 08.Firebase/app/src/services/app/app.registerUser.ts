import { addDoc, collection } from "firebase/firestore";
import { db } from "../../database";
import IUser from "../../model/IUser";
import { AppUseFormType } from "./app.setters";

export async function registerUser(newUser: IUser, states: AppUseFormType): Promise<void> {
  const { setId, setLoading } = states;

  setLoading(true);
  try {
    validateUserData(newUser);

    const dadosUsuario = newUser;

    // mais informações de como usar o setDoc abaixo
    //const newDoc = doc(db, "users", "meuIdManual"); //caso se tenha o ID. Pois setDoc funciona como um insert or update
    //const newDoc = doc(collection(db, "users")); // gera um doc com ID aleatório
    //await setDoc(newDoc, dadosUsuario);

    const newDoc = collection(db, "users");
    const addedDoc = await addDoc(newDoc, dadosUsuario);
    setId(addedDoc.id);
  } catch (error) {
    console.error('Error registering user:', error);
    setId(""); // Limpa o ID após o registro
  } finally {
    setLoading(false);
  }
}

function validateUserData(user: IUser) {
  if (!user.nome || !user.idade || !user.cargo) {
    throw new Error("User data is incomplete: " + JSON.stringify(user));
  }
}

/* SETDOC
✅ Trabalhar com setDoc é ter a função de "insert or update":
Se passarmos o ID e ele já existir na coleção, será sobrescrito.
Caso contrário, será criado como novo documento.

🔸 Gerar ID manualmente:
!const newDoc = doc(db, "users", "meuIdManual");

🔸 Ou gerar ID automaticamente:
!const newDoc = doc(collection(db, "users")); 
→ Aqui o ID é aleatório. Ainda assim, se (improvavelmente) esse ID já existir, será atualizado.
Na prática, sempre cria um novo documento, pois a chance de colisão é praticamente nula.

🔸 Executa a gravação:
!await setDoc(newDoc, dadosUsuario);

✅ O setDoc sempre opera sobre um doc(), portanto é necessário usar doc(collection(db, "users"))
para gerar um novo documento com ID aleatório (ou doc(db, "users", "idManual") para um ID específico).

🔸Obtem o ID do documento processado.
! newDoc.id

*/