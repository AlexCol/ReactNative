import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'
import { SignInStates } from '../states'
import { useNavigation } from '@react-navigation/native'
import { SignNavigationProp } from '../../../routes/SignInStack/_SignInStackParamList'
import { useAuthValue } from '../../../contexts/AuthContext'
import clearSignInRefs from '../functions/clearSignInRefs'

type LoginButtonsProps = {
  signInStates: SignInStates
}

function LoginButtons({ signInStates }: LoginButtonsProps) {
  const { isLoading, signIn } = useAuthValue();
  const navigation = useNavigation<SignNavigationProp>();
  const submitButtonClass = `${isLoading ? styles.disabledSubmitButton : styles.submitButton}`;

  const login = async () => {
    signIn(signInStates.emailRef.current, signInStates.passwordRef.current);
    clearSignInRefs(signInStates);
  };
  const signUp = async () => {
    navigation.navigate("SignUp");
    await new Promise((resolve) => setTimeout(resolve, 200)); //pequeno atraso pra não ser visivel a limpeza durante a navegação
    clearSignInRefs(signInStates);
  }

  return (
    <>
      <TouchableOpacity className={submitButtonClass} activeOpacity={0.8} onPress={login} disabled={isLoading}>
        <Text className={styles.submitText}>
          {isLoading ? (<ActivityIndicator size="large" color="rgb(0, 138, 23)" />) : "Entrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className={styles.link} onPress={signUp} disabled={isLoading}>
        <Text className={styles.linkText}>Criar uma conta!</Text>
      </TouchableOpacity>

    </>
  )
}

export default LoginButtons