import { useEffect } from "react";
import { StyleSheet, View } from "react-native"
import authUseForm from "../services/auth/auth.setters";
import AuthInputText from "../services/auth/components/AuthInputText";
import AuthButtons from "../services/auth/components/AuthButtons";
import cleanUp from "../services/auth/auth.cleanUp";

function Auth() {
  const states = authUseForm();
  useEffect(() => cleanUp(states), [states.authUser]);

  return (
    <View style={authStyles.container}>
      <AuthInputText states={states} />
      <AuthButtons states={states} />
    </View>
  )
}

export default Auth;

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
    justifyContent: "center",
  },
})

/* exemplo de combinação de autenticação para liberar acesso ao crud
  mas aqui não seria o melhor lugar para isso, pois o crud é um componente separado
  pra isso seria melhor usar o um useContext para alimentar as varaiveis de autenticação

    <View style={authStyles.container}>
      <AuthLoggedData states={states} />
      {states.authUser ? (
        <Crud />
      ) : (
        <>
          <AuthInputText states={states} />
          <AuthButtons states={states} />
        </>
      )}
    </View>
*/