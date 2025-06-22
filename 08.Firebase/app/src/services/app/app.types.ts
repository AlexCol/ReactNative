import { Dispatch } from "react";
import IUser from "../../model/IUser";

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