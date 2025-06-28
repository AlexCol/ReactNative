import axios, { AxiosError } from "axios";
import { Alert } from "react-native";

const host = '192.168.0.102'; //precisa ser o IP do computador na rede, pois o emulador não consegue acessar o localhost do computador
const port = '3333';

const core = axios.create({
  baseURL: `http://${host}:${port}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setTokenOnApi(token: string) {
  if (!token) {
    delete core.defaults.headers['Authorization'];
  } else {
    core.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

type apiProps = {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  data?: any;
}
const api = async (config: apiProps) => {
  try {
    const response = await core.request({
      method: config.method,
      url: config.url,
      data: config.data,
    });
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