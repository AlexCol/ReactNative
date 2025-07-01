import { useNavigation } from "@react-navigation/native";
import { useAuthValue } from "../../contexts/AuthContext";
import { MainNavigationProp } from "../../routes/MainDrawer/_MainDrawerParamList";

export function useProfileStates() {
  const { name, signOut } = useAuthValue();
  const navigation = useNavigation<MainNavigationProp>();

  return {
    name,
    signOut,
    navigateToRegister: () => navigation.navigate("NewRegister"),
  }
}