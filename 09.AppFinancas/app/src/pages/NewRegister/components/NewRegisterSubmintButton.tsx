import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import { NewRegisterStates } from "../newRegister.states"
import { newRegisterStyles } from "../newRegister.styles"
import { newRegisterClearRefs } from "../functions/newRegisterClearRefs"
import { addRegister } from "../functions/addRegister"

type NewRegisterSubmintButtonProps = {
  newRegisterStates: NewRegisterStates
}

function NewRegisterSubmintButton({ newRegisterStates }: NewRegisterSubmintButtonProps) {
  const { isLoading } = newRegisterStates;

  async function registry() {
    await addRegister(newRegisterStates);
  }

  return (
    <TouchableOpacity className={newRegisterStyles.submitButton} onPress={registry}>
      {isLoading
        ? <ActivityIndicator color="rgb(255, 255, 255)" size="large" />
        : <Text className={newRegisterStyles.submitButtonText}>Registrar</Text>
      }
    </TouchableOpacity>
  )
}

export default NewRegisterSubmintButton