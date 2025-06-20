import { Text, TouchableOpacity, View } from "react-native"
import styles from "./home.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/_RootStackParamList";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  const navegarParaSobre = () => {
    navigation.navigate("Sobre", {
      nome: "Alexandre",
      idade: 39,
      cidade: "Chapecó"
    });
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