import api from "../../../services/api";
import { HomeStates } from "../home.states";
import { formatDate } from "./formataData";

export default async function fetchBalances(states: HomeStates, isActiveRef: { current: boolean }) {
  //states.setIsLoading(true);

  const data = await api({
    method: 'get',
    url: '/balance',
    params: {
      date: formatDate(states.dateMoviments),
    }
  });

  if (!isActiveRef.current) { //observação abaixo
    return;
  }

  if (data) {
    states.setListBalance(data);
  } else {
    states.setListBalance([]);
  }

  //states.setIsLoading(false);
}

/*
É necessário passar essa referência para evitar atualizar estado em componente desmontado, 
o que causa warnings e possíveis bugs, já que chamadas assíncronas podem retornar depois do unmount. 
Com o controle via isActiveRef, a função ignora atualizações se o componente não estiver mais ativo, 
garantindo segurança e estabilidade no fluxo assíncrono.
*/