import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { appStyles } from "../app.styles"
import { AppUseFormType } from "../app.setters";
import { registerUser } from "../app.registerUser";
import { clearRefs } from "../app.clearRefs";
import IUser from "../../../model/IUser";

type AppInputProps = {
  states: AppUseFormType;
}

function AppInput({ states }: AppInputProps) {
  const btnDisabled = states.loading || !states.nome || !states.idade || !states.cargo;
  const btnStyle = [appStyles.btn, btnDisabled ? appStyles.disabledBtn : appStyles.enabledBtn];

  async function handleRegister() {
    const newUser: IUser = { nome: states.nome, idade: states.idade, cargo: states.cargo };
    await registerUser(newUser, states);
    clearRefs(states);
    Keyboard.dismiss(); // Fecha o teclado após o registro
  }

  return (
    <View style={appStyles.inputContainer}>
      <TextInput
        style={appStyles.input}
        placeholder="Nome"
        value={states.nome}
        onChangeText={states.setNome}
      />
      <TextInput
        style={appStyles.input}
        placeholder="Idade"
        value={states.idade}
        onChangeText={states.setIdade}
        keyboardType='numeric'
      />
      <TextInput
        style={appStyles.input}
        placeholder="Cargo"
        value={states.cargo}
        onChangeText={states.setCargo}
      />

      <TouchableOpacity disabled={btnDisabled} onPress={handleRegister} style={btnStyle}>
        <Text style={appStyles.btnText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AppInput;