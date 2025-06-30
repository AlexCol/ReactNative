import { Alert } from "react-native";
import { NewRegisterStates } from "../newRegister.states";

export default function addRegisterValidation(states: NewRegisterStates) {
  if (!states.descricao || !states.valor) {
    Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos obrigatórios.');
    return false;
  }

  if (isNaN(parseFloat(states.valor))) {
    Alert.alert('Valor inválido', 'Por favor, insira um valor numérico válido.');
    return false;
  }

  return true;
}