import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { setTokenOnApi } from "../../services/api";
import { AuthContextStatesType } from "../authContext.states";

export default async function authSignIn(email: string, password: string, states: AuthContextStatesType) {
  states.setIsLoading(true);
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await api({
    method: "post",
    url: "/login",
    data: { email, password },
  });
  states.setIsLoading(false);

  if (!data) return; //preciso fazer nada, api vai gerar o alerta e console de erro

  states.setId(data.id);
  states.setName(data.name);
  states.setToken(data.token); //!esse provavelmente pode ser descartado, pois como seto no axios, não se usaria o token diretamente
  setTokenOnApi(data.token); //configura o token no axios para as próximas requisições (com isso não precisa mais passar o token manualmente)
  await AsyncStorage.setItem("@finToken", data.token); //salva o token no AsyncStorage para persistência
};