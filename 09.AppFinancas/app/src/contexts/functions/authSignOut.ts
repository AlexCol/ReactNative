import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTokenOnApi } from "../../services/api";
import { AuthContextStatesType } from "../authContext.states";

export default async function authSignOut(states: AuthContextStatesType) {
  states.setId("");
  states.setName("");
  states.setToken("");
  setTokenOnApi("");
  await AsyncStorage.removeItem("@finToken"); //remove o token do AsyncStorage
};