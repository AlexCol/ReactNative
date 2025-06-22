import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database";
import IUser from "../../model/IUser";
import { AppUseFormType } from "./app.setters";

export async function fetchUser(states: AppUseFormType): Promise<void> {
  const { id, setUser, setLoading } = states;

  setLoading(true);
  try {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap === null || !docSnap.exists()) {
      throw new Error(`User with id ${id} not found`);
    }

    const data = docSnap.data() as IUser;
    setUser(data);
  } catch (error) {
    throw new Error(`Error fetching user with id ${id}: ${error}`);
  } finally {
    setLoading(false);
  }
}