import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View } from "react-native"
import Header from "../../components/Header"
import { newRegisterStyles } from "./newRegister.styles"
import MyKeyboardAvoidingView from "../../components/MyKeyboardAvoidingView"
import NewRegisterInputs from "./components/NewRegisterInputs"
import useNewRegisterStates from "./newRegister.states"
import NewRegisterSubmintButton from "./components/NewRegisterSubmintButton"
import NewRegisterTipoLancamentoSwitch from "./components/NewRegisterTipoLancamentoSwitch"

function NewRegister() {
  const states = useNewRegisterStates();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MyKeyboardAvoidingView className={newRegisterStyles.background} >

        {/*Cabeçalho*/}
        <Header title='Registrando' />

        {/*Formulário*/}
        <MyKeyboardAvoidingView className={newRegisterStyles.form}>
          <NewRegisterInputs newRegisterStates={states} />
          <NewRegisterTipoLancamentoSwitch newRegisterStates={states} />
          <NewRegisterSubmintButton newRegisterStates={states} />
        </MyKeyboardAvoidingView>

      </MyKeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default NewRegister;

//TouchableWithoutFeedback ser para caso o teclado esteja aberto, ao clicar fora do input, o teclado se feche
//KeyboardAvoidingView é para que o teclado não cubra os inputs quando aberto, mas sim que os inputs sejam empurrados para cima
//Keyboard.dismiss() é para fechar o teclado quando clicar fora do input