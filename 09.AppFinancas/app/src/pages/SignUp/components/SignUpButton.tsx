import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import styles from '../../SignIn/styles'
import { SignUpStates } from '../states'
import signUp from '../functions/signUp'
import { useAuthValue } from '../../../contexts/AuthContext'
import clearSignUpRefs from '../functions/clearSignUpRefs'

type SignUpButtonProps = {
  signUpStates: SignUpStates
}

function SignUpButton({ signUpStates }: SignUpButtonProps) {
  const { isLoading: authIsLoading, signIn } = useAuthValue();
  const sign = async () => {
    const userData = await signUp(signUpStates);
    if (userData) {
      await signIn(userData.email, userData.password);
      clearSignUpRefs(signUpStates);
    }
  }

  const isLoading = signUpStates.isLoading || authIsLoading;
  const buttonClass = isLoading ? styles.disabledSubmitButton : styles.submitButton;

  return (
    <TouchableOpacity className={buttonClass} activeOpacity={0.8} onPress={sign}>
      {isLoading
        ? (<ActivityIndicator size="large" color="rgb(0, 138, 23)" />)
        : <Text className={styles.submitText}>Entrar</Text>
      }
    </TouchableOpacity>
  )
}

export default SignUpButton