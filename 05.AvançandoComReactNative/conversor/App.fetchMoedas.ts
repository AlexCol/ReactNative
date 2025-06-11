import { Dispatch, SetStateAction } from "react";
import { Moeda } from "./src/model/moeda.model";
import api from "./src/services/api";

type fetchMoedasProps = {
  setMoedas: Dispatch<SetStateAction<Moeda[]>>,
  setMoedaSelecionada: Dispatch<SetStateAction<Moeda>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
}

export default async function fetchMoedas(param: fetchMoedasProps) {
  param.setLoading(true);
  //await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um delay de 2 segundos

  const result = await api.get<{ [key: string]: Moeda }>('all');
  if (result.status !== 200) {
    console.error('Erro ao buscar moedas:', result.status);
    return;
  }

  //const dataAsArray: Moeda[] = Object.values(result.data);
  const dataAsArray: Moeda[] = Object.keys(result.data).map(key => {
    result.data[key].name = result.data[key].name.split('/')[0].trim() + ' (' + result.data[key].code + ')';
    return result.data[key]
  });
  param.setMoedas(dataAsArray);
  param.setMoedaSelecionada(dataAsArray[0]);
  param.setLoading(false);
}