import { Button, Text, View } from "react-native"
import { useAuthValue } from "../hooks/AuthContext";
import handleLogout from "../services/loggedData/auth.handleLogout";

function LoggedData() {
  const { user, setUser } = useAuthValue();

  const logout = async () => await handleLogout(setUser);

  return (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <Text>Usuário logado:</Text>
      <Text>{user ? user.email : "Nenhum usuário logado"}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  )
}

export default LoggedData;