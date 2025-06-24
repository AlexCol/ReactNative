import React from 'react'
import LoggedData from './src/components/LoggedData'
import Auth from './src/components/Auth'
import Crud from './src/components/Crud'
import { useAuthValue } from './src/hooks/AuthContext'
import { StatusBar, StyleSheet, View } from 'react-native'

function AppRoot() {
  const { user } = useAuthValue()
  return (
    <View style={styles.container}>
      {!user ? (
        <>
          <Auth />
        </>
      ) : (
        <>
          <LoggedData />
          <Crud />
        </>
      )}
    </View>
  )
}

export default AppRoot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,
  },
});

/*
nota1: Crud está todo fragmentado em services/app, não foi em services/crud pois no curso deu sequencia no mesmo projeto
resumo:
  tem um componente para formulário de inclusão e edição de usuários (AppInput) (C e U)
  tem um componente para lista de usuários (AppUsersList) (R)
    nele tem um componente para cada item da lista (AppUsersListItem)
      e nele tem botoes de deletar e ativação do editar (D e U)

acabei fazendo o mesmo para o auth :P
*/