import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../styles'
import { SignInStates } from '../states'
import { useAuthValue } from '../../../contexts/AuthContext'

type SignInInputsProps = {
  signInStates: SignInStates
}

function SignInInputs({ signInStates }: SignInInputsProps) {
  const { isLoading } = useAuthValue();;
  return (
    <View className={styles.areaInput}>
      <TextInput
        className={styles.input}
        placeholder="Seu email"
        onChangeText={(text) => signInStates.emailRef.current = text}
        ref={signInStates.emailInputRef}
        editable={!isLoading}
      />
      <TextInput
        className={styles.input}
        placeholder="Sua senha"
        secureTextEntry
        onChangeText={(text) => signInStates.passwordRef.current = text}
        ref={signInStates.passwordInputRef}
        editable={!isLoading}
      />
    </View>
  )
}

export default SignInInputs