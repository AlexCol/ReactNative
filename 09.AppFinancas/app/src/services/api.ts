import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Alert, AlertButton } from "react-native";

const host = '192.168.0.102'; //precisa ser o IP do computador na rede, pois o emulador não consegue acessar o localhost do computador
const port = '3333';

const core = axios.create({
  baseURL: `http://${host}:${port}/`,
});

const api = async (config: AxiosRequestConfig<any>) => {
  try {
    const response = await core.request(config);
    return response.data;
  } catch (error) {
    let errorHeader = 'Erro inesperado';
    let errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';

    if (error instanceof AxiosError) {
      errorHeader = 'Erro na requisição';
      errorMessage = error.response?.data?.error || error.message;
    }

    //console.error(errorHeader, errorMessage);
    Alert.alert(
      errorHeader,
      errorMessage
    );
    return null;
  }
}

export default api;