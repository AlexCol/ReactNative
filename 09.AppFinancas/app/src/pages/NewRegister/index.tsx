import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native"
import Header from "../../components/Header"
import { newRegisterStyles } from "./newRegister.styles"
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView"
import NewRegisterInputs from "./components/NewRegisterInputs"
import useNewRegisterStates from "./newRegister.states"
import NewRegisterSubmintButton from "./components/NewRegisterSubmintButton"

function NewRegister() {
  const states = useNewRegisterStates();
  return (
    <KeyboardAvoidingView
      className={newRegisterStyles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header title='Registrando' />
      <NewRegisterInputs newRegisterStates={states} />
      <NewRegisterSubmintButton newRegisterStates={states} />
    </KeyboardAvoidingView>
  )
}

export default NewRegister