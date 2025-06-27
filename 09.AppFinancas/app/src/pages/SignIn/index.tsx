import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuthValue } from "../../contexts/AuthContext";
import styles from "./styles";
import { SignNavigationProp } from "../../routes/SignInStack/_SignInStackParamList";
import { useNavigation } from "@react-navigation/native";

function SignIn() {
  const { setAuth } = useAuthValue();
  const navigation = useNavigation<SignNavigationProp>();
  const logoImage = require("../../../public/images/Logo.png");

  return (
    <View className={styles.background}>
      <KeyboardAvoidingView className={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
        <Image
          className={styles.logo}
          source={logoImage}
        />

        <View className={styles.areaInput}>
          <TextInput
            className={styles.input}
            placeholder="Seu email"
            keyboardType="email-address"
          />
          <TextInput
            className={styles.input}
            placeholder="Sua senha"
            secureTextEntry
          />
        </View>

        <TouchableOpacity className={styles.submitButton} activeOpacity={0.8}>
          <Text className={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity className={styles.link} onPress={() => navigation.navigate("SignUp")}>
          <Text className={styles.linkText}>Criar uma conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SignIn;