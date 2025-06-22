import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../database";
import IUser from "../../model/IUser";
import { fetchUserParams } from "./app.types";

export async function fetchUserObserver(params: fetchUserParams): Promise<void> {
  const { id, setUser, setLoading } = params;

  setLoading(true);
  try {
    onSnapshot(doc(db, 'users', id), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as IUser;
        setUser(data);
      }
    }, (error) => {
      throw new Error(`Error observing user with id ${id}: ${error}`);
    });
  } catch (error) {
    throw new Error(`Error fetching user with id ${id}: ${error}`);
  } finally {
    setLoading(false);
  }
}