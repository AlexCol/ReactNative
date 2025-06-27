import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../SignIn/styles"
import { SignNavigationProp } from "../../routes/SignInStack/_SignInStackParamList";
import { useNavigation } from "@react-navigation/native";

function SignUp() {
  const navigation = useNavigation<SignNavigationProp>();

  return (
    <View className={styles.background}>
      <KeyboardAvoidingView className={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
        <View className={styles.areaInput}>
          <TextInput className={styles.input} placeholder="Nome" />
          <TextInput className={styles.input} placeholder="Seu E-mail" />
          <TextInput className={styles.input} placeholder="Sua Senha" secureTextEntry />
          <TextInput className={styles.input} placeholder="Confirmar Senha" secureTextEntry />
        </View>

        <TouchableOpacity className={styles.submitButton} activeOpacity={0.8}>
          <Text className={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SignUp