import React from 'react'
import { AppUseFormType } from '../app.setters'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AppUsersListItem from './AppUsersListItem';

type AppUsersListProps = {
  states: AppUseFormType;
}

function AppUsersList({ states }: AppUsersListProps) {
  const sortedUsers = React.useMemo(() => { //com useMemo, evitamos reordenar a lista toda vez que o componente renderiza
    return [...states.users].sort((a, b) => a.nome.localeCompare(b.nome));
  }, [states.users]);

  return (
    <View style={styles.list}>
      <Text style={styles.titulo}>Lista de Usuários</Text>

      <FlatList
        keyExtractor={(item) => item.id ?? ""}
        data={sortedUsers}
        renderItem={({ item }) => <AppUsersListItem user={item} />}
        ListEmptyComponent={<Text>Nenhum usuário encontrado.</Text>}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default AppUsersList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});