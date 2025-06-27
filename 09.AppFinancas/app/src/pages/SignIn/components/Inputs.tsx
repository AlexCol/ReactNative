import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../styles'
import { SignInStates } from '../states'

type InputsProps = {
  signInStates: SignInStates
}

function Inputs({ signInStates }: InputsProps) {
  return (
    <View className={styles.areaInput}>
      <TextInput
        className={styles.input}
        placeholder="Seu email"
        onChangeText={(text) => signInStates.emailRef.current = text}
        ref={signInStates.emailInputRef}
      />
      <TextInput
        className={styles.input}
        placeholder="Sua senha"
        secureTextEntry
        onChangeText={(text) => signInStates.passwordRef.current = text}
        ref={signInStates.passwordInputRef}
      />
    </View>
  )
}

export default Inputs