import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import IUser from "../../../model/IUser"
import deleteUser from "../app.deleteUser";
import { Dispatch } from "react";
import { AppUseFormType } from "../app.setters";

type AppUsersListItemProps = {
  user: IUser;
  states: AppUseFormType;
};

function AppUsersListItem({ user, states }: AppUsersListItemProps) {
  function prepareUserForEdit(user: IUser) {
    if (!user.id) return;

    states.setId(user.id); // Define o ID do usuário para edição
    states.setNome(user.nome); // Define o nome do usuário para edição
    states.setIdade(user.idade.toString()); // Define a idade do usuário para edição
    states.setCargo(user.cargo); // Define o cargo do usuário para edição
    states.setShowForm(true);
    states.setEditingUser(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <Text style={styles.item}>Nome: {user.nome}</Text>
        <Text style={styles.item}>Idade: {user.idade}</Text>
        <Text style={styles.item}>Cargo: {user.cargo}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#4169e1" }]} onPress={() => prepareUserForEdit(user)}>
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: "#f44336" }]} onPress={() => deleteUser(user.id || "")}>
          <Text style={styles.btnText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppUsersListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    fontSize: 16,
    color: "#333",
  },
  labelsContainer: {
    width: "50%",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
    alignItems: "center",
    width: "40%",
    height: "60%",
    maxHeight: 40,
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