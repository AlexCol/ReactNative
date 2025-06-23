import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../database";
import IUser from "../../model/IUser";
import { AppUseFormType } from "./app.setters";

export async function fetchUsers(states: AppUseFormType): Promise<void> {
  const { setUsers, setLoading } = states;

  setLoading(true);
  try {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      const data = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() } as IUser;
      });

      setUsers(data);
    });
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  } finally {
    setLoading(false);
  }
}

/* pra usar SEM estilo observer
    const colRef = collection(db, 'users');
    const docsSnap = await getDocs(colRef);

    const data = docsSnap.docs.map(doc => {
      return { id: doc.id, ...doc.data() } as IUser;
    });

    setUsers(data);    

*/