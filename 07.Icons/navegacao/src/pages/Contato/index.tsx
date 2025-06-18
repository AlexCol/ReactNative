
import { Button, Text, TouchableOpacity, View } from "react-native"
import { stackType } from "../../routes/DynamicRouter";
import styles from "./contatos.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/_RootStackParamList";
import { StackActions, useNavigation } from "@react-navigation/native";

export function ContatosScreenConfig(Stack: stackType) {

  return <Stack.Screen
    name="Contatos"
    component={Contato}
    options={{
      title: 'Tela Contatos',
      headerStyle: {
        backgroundColor: '#808000'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  />
}

type ContatoNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Contatos'>;

function Contato() {
  const navigation = useNavigation<ContatoNavigationProp>();

  function voltar() {
    navigation.goBack();
  }

  function home() {
    navigation.dispatch(StackActions.popToTop());
  }
  return (
    <View>
      <Text>Contato</Text>

      <TouchableOpacity style={styles.btn} onPress={voltar}>
        <Text style={styles.textBtn}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={home}>
        <Text style={styles.textBtn}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contato;