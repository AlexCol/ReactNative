import { Text, TouchableOpacity, View } from "react-native"
import styles from "./home.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/_RootStackParamList";
import { RootHomeStackParamList } from "./HomeStack/_RootHomeStackParamList";

type tabsHomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type stackHomeNavigationProp = NativeStackNavigationProp<RootHomeStackParamList>;

function Home() {
  const navigationTabs = useNavigation<tabsHomeNavigationProp>();
  const navigationStack = useNavigation<stackHomeNavigationProp>();

  // as quatro linhas de tipgame acima podem ser substituídas por esta linha, mas perde-se a facilidade do intelissense e tipagem em caso de poder passar parametros ao navegar
  //const navTest = useNavigation<any>(); 

  const navegarParaSobre = () => {
    navigationTabs.navigate("Sobre");
  }

  const navegarParaDetalhes = () => {
    navigationStack.navigate("Detalhes");
  }

  return (
    <View style={styles.container}>
      <Text>Tela home</Text>
      <TouchableOpacity style={styles.btn} onPress={navegarParaSobre}>
        <Text style={styles.textBtn}>Ir para Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={navegarParaDetalhes}>
        <Text style={styles.textBtn}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;