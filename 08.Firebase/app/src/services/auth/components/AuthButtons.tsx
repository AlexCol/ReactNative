import { Text, StyleSheet, TouchableOpacity, View } from "react-native"
import { AuthUseFormType } from "../auth.setters"
import handleCreateUser from "../auth.handleCreateUser";
import handleLogin from "../auth.handleLogin";

type AuthButtonsProps = {
  states: AuthUseFormType
}

function AuthButtons({ states }: AuthButtonsProps) {
  const createUser = async () => await handleCreateUser(states);
  const login = async () => await handleLogin(states);

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "rgb(233, 173, 10)" }]} onPress={createUser}>
        <Text style={styles.btnText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: "rgb(173, 10, 233)" }]} onPress={login}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 10, //Left & Right
    width: '35%',
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
})