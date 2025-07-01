import api from "../../../services/api";
import { HomeStates } from "../home.states";
import { formatDate } from "./formataData";

export default async function fetchReceives(states: HomeStates, isActiveRef: { current: boolean }) {
  //states.setIsLoading(true);

  const data = await api({
    method: 'get',
    url: '/receives',
    params: {
      date: formatDate(states.dateMoviments),
    }
  });

  if (!isActiveRef.current) { //observação abaixo
    return;
  }

  if (data) {
    states.setListReceives(data);
  } else {
    states.setListReceives([]);
  }

  //states.setIsLoading(false);
}