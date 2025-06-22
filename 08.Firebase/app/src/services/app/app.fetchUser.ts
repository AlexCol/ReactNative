import { doc, getDoc } from "firebase/firestore";
import { fetchUserParams } from "./app.types";
import { db } from "../../database";
import IUser from "../../model/IUser";

export async function fetchUser(params: fetchUserParams): Promise<void> {
  const { id, setUser, setLoading } = params;

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