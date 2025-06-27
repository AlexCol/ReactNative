import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'
import { SignInStates } from '../functions/states'
import { useNavigation } from '@react-navigation/native'
import { SignNavigationProp } from '../../../routes/SignInStack/_SignInStackParamList'
import { AuthContextType } from '../../../contexts/AuthContext'
import handleSignIn from '../functions/handleSignIn'

type LoginButtonsProps = {
  contexto: AuthContextType,
  states: SignInStates
}

function LoginButtons({ contexto, states }: LoginButtonsProps) {
  const navigation = useNavigation<SignNavigationProp>();
  const submitButtonClass = `${states.isLoading ? styles.disabledSubmitButton : styles.submitButton}`;

  const login = async () => await handleSignIn(contexto, states);
  const signUp = () => navigation.navigate("SignUp");

  return (
    <>
      <TouchableOpacity className={submitButtonClass} activeOpacity={0.8} onPress={login} disabled={states.isLoading}>
        <Text className={styles.submitText}>
          {states.isLoading ? (<ActivityIndicator size="large" color="rgb(0, 138, 23)" />) : "Entrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className={styles.link} onPress={signUp} disabled={states.isLoading}>
        <Text className={styles.linkText}>Criar uma conta!</Text>
      </TouchableOpacity>

    </>
  )
}

export default LoginButtons