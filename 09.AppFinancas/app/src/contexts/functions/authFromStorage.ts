import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { setTokenOnApi } from "../../services/api";
import { AuthContextStatesType } from "../authContext.states";
import authSignOut from "./authSignOut";

export default async function authFromStorage(states: AuthContextStatesType) {
  const token = await AsyncStorage.getItem("@finToken");
  if (!token) return;

  setTokenOnApi(token);
  states.setStartupLoading(true);
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //simula um delay de 2 segundos para ver o loading
  const data = await api({
    method: "get",
    url: "/me",
  });
  states.setStartupLoading(false);

  if (!data) {
    await authSignOut(states); //se não conseguir pegar os dados do usuário, faz o signOut para limpar o estado
    return; //preciso fazer nada, api vai gerar o alerta e console de erro
  }

  states.setId(data.id);
  states.setName(data.name);
  states.setToken(token); //!esse provavelmente pode ser descartado, pois como seto no axios, não se usaria o token diretamente
}