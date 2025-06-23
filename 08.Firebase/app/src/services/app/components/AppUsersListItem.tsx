import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import IUser from "../../../model/IUser"
import deleteUser from "../app.deleteUser";

type AppUsersListItemProps = {
  user: IUser;
};

function AppUsersListItem({ user }: AppUsersListItemProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {user.nome}</Text>
      <Text style={styles.item}>Idade: {user.idade}</Text>
      <Text style={styles.item}>Cargo: {user.cargo}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => deleteUser(user.id || "")}> {/*nota1*/}
        <Text style={styles.btnText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppUsersListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    fontSize: 16,
    color: "#333",
  },
  btn: {
    backgroundColor: "#ff4d4d",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    alignItems: "center",
    width: "20%",
    alignSelf: "flex-end",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

/*
nota1: estou deletando diretamente, mas o ideal seria apresentar um modal de confirmação antes de deletar o usuário.
*/