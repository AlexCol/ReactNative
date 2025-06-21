import { Text, TouchableOpacity, View } from "react-native"
import styles from "./home.styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/_RootStackParamList";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type HomeNavigationProp = DrawerNavigationProp<RootStackParamList>;

function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  const navegarParaSobre = () => {
    navigation.navigate("Sobre");
  }

  return (
    <View style={styles.container}>
      <Text>Tela home</Text>
      <TouchableOpacity style={styles.btn} onPress={navegarParaSobre}>
        <Text style={styles.textBtn}>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;