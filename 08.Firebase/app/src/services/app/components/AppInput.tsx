import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { appStyles } from "../app.styles"
import { AppUseFormType } from "../app.setters";
import { registerUser } from "../app.registerUser";
import { clearRefs } from "../app.clearRefs";
import IUser from "../../../model/IUser";
import { editUser } from "../app.editUser";

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

  async function handleEdit() {
    const newUser: IUser = { nome: states.nome, idade: states.idade, cargo: states.cargo };
    newUser.id = states.id; // Certifique-se de que o ID está definido para edição
    await editUser(newUser, states);
    clearRefs(states);
    states.setEditingUser(false);
    Keyboard.dismiss(); // Fecha o teclado após o registro
  }

  async function cancelEdit() {
    clearRefs(states);
    states.setEditingUser(false);
    Keyboard.dismiss();
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

      <View style={appStyles.btnContainer}>
        {states.editingUser ? (
          <TouchableOpacity disabled={btnDisabled} onPress={handleEdit} style={btnStyle}>
            <Text style={appStyles.btnText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={btnDisabled} onPress={handleRegister} style={btnStyle}>
            <Text style={appStyles.btnText}>Adicionar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={cancelEdit} style={[btnStyle, { backgroundColor: '#f44336' }]}>
          <Text style={appStyles.btnText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AppInput;