import React, { useEffect } from 'react'
import appUseForm from '../services/app/app.setters';
import { fetchUsers } from '../services/app/app.fetchUsers';
import { View, Text } from 'react-native';
import { appStyles } from '../services/app/app.styles';
import AppInput from '../services/app/components/AppInput';
import AppUsersList from '../services/app/components/AppUsersList';
import AccessInputButton from '../services/app/components/AppAccessInputButton';

// arquivos de CRUD na pasta services/app
//! CREATE -- em registerUser
//! READ -- em fetchUser e fetchUserObserver
//! UPDATE -- em editUser (inicia em AppUsersListItem, que prepara os inputs para edição e vai chamar o editUser)
//! DELETE -- em deleteUser (chamado em AppUsersListItem)

export default function Crud() {
  const states = appUseForm(); //demonstração de uso de useState em um arquivo separado, para não poluir o App.tsx

  useEffect(() => {
    /*fetchers de um usuário por id - que está no useState Id */
    //fetchUser(states); //usando forma tradicional de chamada ao banco, chamou, pegou os dados e fecha a conexão
    //fetchUserObserver(states); //usando forma de observação, chama o banco e fica ouvindo as mudanças, atualizando os dados em tempo real
    fetchUsers(states);
  }, [states.id]); //registerUser chama o setId, que atualiza o estado, e isso dispara o useEffect novamente

  if (states.loading) {
    return (
      <View style={appStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={appStyles.container}>
      {/* <AppTopHeader db={db} states={states} /> */}

      {/*formulário de inclusão (e edição, quando convertido por usersListItem)*/}
      <AccessInputButton states={states} />
      {states.showForm && <AppInput states={states} />}

      {/*lista de usuários*/}
      <AppUsersList states={states} />
    </View>
  );
}

