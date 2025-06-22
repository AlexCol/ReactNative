import { Dispatch } from "react";
import IUser from "../../model/IUser";

/* ao utilizar ReturnType<typeof appUseForm> facilita a tipagem, não precisando criar vários tipos para cara função */
/*
export type fetchUserParams = {
  id: string;
  setUser: Dispatch<React.SetStateAction<IUser>>;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
};

export type userRegisterParams = {
  user: IUser;
  setId: Dispatch<React.SetStateAction<string>>;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}
*/