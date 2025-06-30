import dayjs from "dayjs";
import api from "../../../services/api";
import { HomeStates } from "../home.states";
import { BACKEND_DATE_FORMAT } from "../../../util/constantes";

export default async function fetchReceives(states: HomeStates, isActiveRef: { current: boolean }) {
  //states.setIsLoading(true);

  const data = await api({
    method: 'get',
    url: '/receives',
    params: {
      date: dayjs(states.dateMoviments).format(BACKEND_DATE_FORMAT), // Formata a data para o formato DD/MM/YYYY
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