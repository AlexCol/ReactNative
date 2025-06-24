import { StyleSheet, Text, TextInput, View } from "react-native";
import { AuthUseFormType } from "../auth.setters";

type AuthInputTextProps = {
  states: AuthUseFormType;
}

function AuthInputText({ states }: AuthInputTextProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={states.email}
        onChangeText={states.setEmail}
      />

      <Text style={styles.text}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        autoCapitalize="none"
        value={states.password}
        onChangeText={states.setPassword}
      />
    </View>
  )
}

export default AuthInputText;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "green",
    marginLeft: 10,
  },
  inputContainer: {

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgb(233, 173, 10)",
    paddingHorizontal: 10,
    marginHorizontal: 10, //Left & Right
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});