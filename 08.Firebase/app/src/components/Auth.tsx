import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { auth } from "../database";

function Auth() {
  async function handleCreateUser() {
    const user = await createUserWithEmailAndPassword(auth, "eu_axil@yahoo.com.br", "123456s");
    console.log("Usuário criado com sucesso:", user);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.text}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.btn} onPress={handleCreateUser}>
        <Text style={styles.btnText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "green",
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgb(233, 173, 10)",
    paddingHorizontal: 10,
    marginHorizontal: 10, //Left & Right
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "rgb(233, 173, 10)",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
})