import { StatusBar, StyleSheet, View } from 'react-native';
import Crud from './src/components/Crud';
import Auth from './src/components/Auth';
import { auth } from "./src/database";
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default function App() {
  async function handleCreateUser() {
    await createUserWithEmailAndPassword(auth, "eu_axil@yahoo.com.br", "123456s");
  }

  return (
    <View style={styles.container}>
      {/* <Crud /> */}
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20, // Adiciona margem superior para evitar sobreposição com a barra de status
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20, // Adiciona margem inferior para evitar sobreposição com a barra de status
  },
});

/*
nota1: Crud está todo fragmentado em services/app, não foi em services/crud pois no curso deu sequencia no mesmo projeto
resumo:
  tem um componente para formulário de inclusão e edição de usuários (AppInput) (C e U)
  tem um componente para lista de usuários (AppUsersList) (R)
    nele tem um componente para cada item da lista (AppUsersListItem)
      e nele tem botoes de deletar e ativação do editar (D e U)
*/