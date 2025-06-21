import { Text, TouchableOpacity, View } from "react-native"
import styles from "./contatos.styles";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "../../routes/_RootStackParamList";

type ContatoNavigationProp = DrawerNavigationProp<RootStackParamList>;

function Contato() {
  const navigation = useNavigation<ContatoNavigationProp>();

  const abrirDrawer = () => {
    navigation.openDrawer();
  }
  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <TouchableOpacity style={styles.btn} onPress={abrirDrawer}>
        <Text style={styles.textBtn}>Abrir drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contato;