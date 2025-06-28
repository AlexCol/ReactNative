import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'
import { SignInStates } from '../states'
import { useNavigation } from '@react-navigation/native'
import { SignNavigationProp } from '../../../routes/SignInStack/_SignInStackParamList'
import { useAuthValue } from '../../../contexts/AuthContext'
import clearSignInRefs from '../functions/clearSignInRefs'

type SignInButtonsProps = {
  signInStates: SignInStates
}

function SignInButtons({ signInStates }: SignInButtonsProps) {
  const { isLoading, signIn } = useAuthValue();
  const navigation = useNavigation<SignNavigationProp>();
  const submitButtonClass = `${isLoading ? styles.disabledSubmitButton : styles.submitButton}`;

  const login = async () => {
    await signIn(signInStates.emailRef.current, signInStates.passwordRef.current);
    await new Promise((resolve) => setTimeout(resolve, 200)); //pequeno atraso pra não ser visivel a limpeza durante a navegação
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
        {isLoading
          ? (<ActivityIndicator size="large" color="rgb(0, 138, 23)" />)
          : (<Text className={styles.submitText}>Entrar</Text>)
        }
      </TouchableOpacity>

      <TouchableOpacity className={styles.link} onPress={signUp} disabled={isLoading}>
        <Text className={styles.linkText}>Criar uma conta!</Text>
      </TouchableOpacity>

    </>
  )
}

export default SignInButtons