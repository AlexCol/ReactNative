
import { NewRegisterStates } from "../newRegister.states";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { newRegisterStyles } from "../newRegister.styles";

type NewRegisterTipoLancamentoSwitchProps = {
  newRegisterStates: NewRegisterStates;
}

function NewRegisterTipoLancamentoSwitch({ newRegisterStates }: NewRegisterTipoLancamentoSwitchProps) {
  const { tipoLancamento, setTipoLancamento } = newRegisterStates;
  const receitaClassSelected = filtraClasseBotao(tipoLancamento, 'receita');
  const despesaClassSelected = filtraClasseBotao(tipoLancamento, 'despesa');

  return (
    <View className={newRegisterStyles.tpLancamentoContainer}>
      <TouchableOpacity
        className={receitaClassSelected}
        onPress={() => setTipoLancamento('receita')}
        disabled={newRegisterStates.isLoading}
      >
        <Feather name={'arrow-up'} size={25} color="black" />
        <Text className={newRegisterStyles.tpLancamentoLabel}>Receita</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={despesaClassSelected}
        onPress={() => setTipoLancamento('despesa')}
        disabled={newRegisterStates.isLoading}
      >
        <Feather name={'arrow-down'} size={25} color="black" />
        <Text className={newRegisterStyles.tpLancamentoLabel}>Despesa</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewRegisterTipoLancamentoSwitch;

function filtraClasseBotao(tipoLancamentoState: string, tpLancamento: string): string {
  return tipoLancamentoState === tpLancamento
    ? newRegisterStyles.selectedTpLancamentoTypeButton
    : newRegisterStyles.inactiveTpLancamentoTypeButton;
}
