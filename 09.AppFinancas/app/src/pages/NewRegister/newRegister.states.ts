import { RefObject, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function useNewRegisterStates() {
  const [isLoading, setIsLoading] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipoLancamento, setTipoLancamento] = useState<'receita' | 'despesa'>('receita');

  return {
    isLoading, setIsLoading,
    descricao, setDescricao,
    valor, setValor,
    tipoLancamento, setTipoLancamento
  }

}

export type NewRegisterStates = ReturnType<typeof useNewRegisterStates>;