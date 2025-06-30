import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./header.styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string;
  isLoading?: boolean;
}

function Header({ title, isLoading = false }: HeaderProps) {
  const navigation = useNavigation<any>(); //como não vou acessar nenhuma tela especifica, não preciso tipar

  return (
    <View className={styles.container}>
      <TouchableOpacity
        className={styles.button}
        onPress={() => navigation.openDrawer()}
        disabled={isLoading}
      >
        <Feather name="menu" size={35} color="#121212" />
      </TouchableOpacity>

      {title && (
        <Text className={styles.title}>
          {title}
        </Text>
      )}
    </View>
  )
}

export default Header