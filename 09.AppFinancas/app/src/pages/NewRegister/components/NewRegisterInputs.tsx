import React from 'react'
import MyKeyboardAvoidingView from '../../../components/MyKeyboardAvoidingView'
import { TextInput, View } from 'react-native'
import { NewRegisterStates } from '../newRegister.states';
import { newRegisterStyles } from '../newRegister.styles';
import { newRegisterTrataValor } from '../functions/newRegisterTrataValor';

type NewRegisterInputsProps = {
  newRegisterStates: NewRegisterStates;
}

function NewRegisterInputs({ newRegisterStates }: NewRegisterInputsProps) {
  return (
    <>
      <TextInput
        className={newRegisterStyles.input}
        placeholder="Descrição desse registro"
        value={newRegisterStates.descricao}
        onChangeText={newRegisterStates.setDescricao}
        maxLength={50}
        editable={!newRegisterStates.isLoading}
      />

      <TextInput
        className={newRegisterStyles.input}
        placeholder="Valor desejado"
        value={newRegisterStates.valor}
        onChangeText={(valor) => newRegisterStates.setValor(newRegisterTrataValor(valor))}
        maxLength={10}
        keyboardType='numeric'
        editable={!newRegisterStates.isLoading}
      />
    </>
  )
}

export default NewRegisterInputs