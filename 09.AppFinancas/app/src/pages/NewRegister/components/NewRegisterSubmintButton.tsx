import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import { NewRegisterStates } from "../newRegister.states"
import { newRegisterStyles } from "../newRegister.styles"
import { newRegisterClearRefs } from "../functions/newRegisterClearRefs"

type NewRegisterSubmintButtonProps = {
  newRegisterStates: NewRegisterStates
}

function NewRegisterSubmintButton({ newRegisterStates }: NewRegisterSubmintButtonProps) {
  const { isLoading } = newRegisterStates;

  function registry() {
    console.log('Registrando...');
    console.log(newRegisterStates.descricao);
    console.log(newRegisterStates.valor);
    newRegisterClearRefs(newRegisterStates);
  }

  return (
    <TouchableOpacity className={newRegisterStyles.submitButton} onPress={registry}>
      {isLoading
        ? <ActivityIndicator color="rgb(0, 138, 23)" size="large" />
        : <Text className={newRegisterStyles.submitButtonText}>Registrar</Text>
      }
    </TouchableOpacity>
  )
}

export default NewRegisterSubmintButton