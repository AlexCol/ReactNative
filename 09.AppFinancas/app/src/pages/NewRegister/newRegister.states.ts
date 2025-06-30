import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { MainNavigationProp } from "../../routes/MainDrawer/_MainDrawerParamList";

export default function useNewRegisterStates() {
  const [isLoading, setIsLoading] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipoLancamento, setTipoLancamento] = useState<'receita' | 'despesa'>('receita');
  const navigation = useNavigation<MainNavigationProp>();

  return {
    isLoading, setIsLoading,
    descricao, setDescricao,
    valor, setValor,
    tipoLancamento, setTipoLancamento,
    navigation
  }

}

export type NewRegisterStates = ReturnType<typeof useNewRegisterStates>;