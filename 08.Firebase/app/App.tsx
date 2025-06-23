import { StyleSheet, View } from 'react-native';
import Crud from './src/components/Crud';

export default function App() {
  return (
    <View style={styles.container}>
      <Crud />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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