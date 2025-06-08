import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import MyInput from "./parts/MyInput";
import { useRef, useState } from "react";
import MyButton from "./parts/MyButton";
import MyModal from "./parts/MyModal";
import MyImage from "./parts/MyImage";

function Main() {
  const [refresh, setRefresh] = useState(false); // This state is not used in the current code, but can be useful for triggering re-renders if needed.

  const [modalVisible, setModalVisible] = useState(false);
  const [evaluation, setEvaluation] = useState(0);

  const alcoolRef = useRef<string>('');
  const gasolinaRef = useRef<string>('');
  const alcoolInputRef = useRef<TextInput>(null);
  const gasolinaInputRef = useRef<TextInput>(null);

  const calcular = () => {
    const alcool = parseFloat(alcoolRef.current);
    const gasolina = parseFloat(gasolinaRef.current);

    if (isNaN(alcool) || isNaN(gasolina)) {
      alert("Por favor, insira valores válidos para álcool e gasolina.");
      clearInputs();
      return;
    }

    const resultado = alcool / gasolina;
    setEvaluation(resultado);
    setModalVisible(true);
  }

  const onModalClose = () => {
    clearInputs();
    setModalVisible(false);
  }

  const clearInputs = () => {
    alcoolRef.current = '';
    gasolinaRef.current = '';
    alcoolInputRef.current?.clear();
    gasolinaInputRef.current?.clear();
    alcoolInputRef.current?.focus();
    setRefresh(!refresh); // Trigger a re-render to clear the inputs
  }

  return (
    <View style={styles.container}>
      <MyImage
        source={require('../../assets/imgs/logo.png')}
      />

      <Text style={styles.cabecalho}>
        Qual a melhor opção?
      </Text>

      <MyInput
        label="Alcool (preço por litro):"
        textRef={alcoolRef}
        inputRef={alcoolInputRef}
        placeholder="Digite o preço do álcool"
      />

      <MyInput
        label="Gasolina (preço por litro):"
        textRef={gasolinaRef}
        inputRef={gasolinaInputRef}
        placeholder="Digite o preço da gasolina"
      />

      <MyButton label="Calcular" onPress={calcular} />

      <MyModal
        evaluation={evaluation}
        gasPrice={gasolinaRef.current}
        alcoholPrice={alcoolRef.current}
        onClose={onModalClose}
        visible={modalVisible}
      />

    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', //inportante, pois temos uma view mãe, então precisamos defirnir a largura dessa (filha) para que a largura das filhas dessa não deem problema
  },
  cabecalho: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

});