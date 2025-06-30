import { Alert } from "react-native";
import { BACKEND_DATE_FORMAT } from "../../../util/constantes";
import { NewRegisterStates } from "../newRegister.states";
import { newRegisterClearRefs } from "./newRegisterClearRefs";
import api from "../../../services/api";
import addRegisterValidation from "./addRegisterValidation";
import dayjs from "dayjs";

export async function addRegister(states: NewRegisterStates) {
  if (!addRegisterValidation(states))
    return;

  const mensagem = `Você deseja adicionar este registro? 
  Descrição: ${states.descricao} 
  Valor: ${states.valor}
  Tipo: ${states.tipoLancamento.toUpperCase()}
`;

  Alert.alert('Confirmação', mensagem, [
    { text: 'Confirmar', onPress: async () => await processAddRegister(states) },
    { text: 'Cancelar', style: 'cancel' },
  ]);
}

//*********************************************************************************************
// Função em separado, pois ela é chamada dentro do Alert.confirm
// Necessário pois o Alert não segura a execução do código até o usuário responder
//*********************************************************************************************
async function processAddRegister(states: NewRegisterStates) {
  states.setIsLoading(true);
  try {
    //await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulating a delay for the loading state
    const response = await api({
      method: 'post',
      url: '/receive',
      data: {
        description: states.descricao,
        value: parseFloat(states.valor),
        type: states.tipoLancamento,
        date: dayjs().format(BACKEND_DATE_FORMAT),
      }
    });

    Alert.alert('Registro adicionado', 'Seu registro foi adicionado com sucesso!');
  } catch (error) {
    Alert.alert('Erro ao adicionar registro', 'Ocorreu um erro ao tentar adicionar seu registro. Por favor, tente novamente mais tarde.');
  } finally {
    states.setIsLoading(false);
  }
  newRegisterClearRefs(states);
  states.navigation.navigate('Home');
}