import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./sobre.styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "../../routes/_RootStackParamList";

type SobreNavigationProp = DrawerNavigationProp<RootStackParamList>;

function Sobre() {
  const navigation = useNavigation<SobreNavigationProp>();

  const navegarParaContatos = () => {
    navigation.navigate("Contatos");
  }

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>

      <TouchableOpacity style={styles.btn} onPress={navegarParaContatos}>
        <Text style={styles.textBtn}>Ir para Contatos</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Sobre;