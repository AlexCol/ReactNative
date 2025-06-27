import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../../SignIn/styles'
import { SignUpStates } from '../states'
import { useAuthValue } from '../../../contexts/AuthContext'

type SignUpInputsProps = {
  signUpStates: SignUpStates,
}

function SignUpInputs({ signUpStates }: SignUpInputsProps) {
  const { isLoading: authIsLoading } = useAuthValue();
  const isLoading = signUpStates.isLoading || authIsLoading;

  return (
    <View className={styles.areaInput}>
      <TextInput
        className={styles.input}
        placeholder="Nome"
        ref={signUpStates.nomeRefInput}
        onChangeText={(text) => signUpStates.nomeRef.current = text}
        editable={!isLoading}
      />
      <TextInput
        className={styles.input}
        placeholder="Seu E-mail"
        ref={signUpStates.emailRefInput}
        onChangeText={(text) => signUpStates.emailRef.current = text}
        editable={!isLoading}
      />
      <TextInput
        className={styles.input}
        placeholder="Sua Senha"
        secureTextEntry
        ref={signUpStates.passwordRefInput}
        onChangeText={(text) => signUpStates.passwordRef.current = text}
        editable={!isLoading}
      />
      <TextInput
        className={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        ref={signUpStates.confirmPasswordRefInput}
        onChangeText={(text) => signUpStates.confirmPasswordRef.current = text}
        editable={!isLoading}
      />
    </View>
  )
}

export default SignUpInputs