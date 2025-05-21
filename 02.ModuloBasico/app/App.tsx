import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MyImage from "./src/components/MyImage";
import { useState } from "react";
import MyButton from "./src/components/MyButton";
import MyText from "./src/components/MyText";
import { BASIC_IMAGE_URI } from "./src/utils/Constants";
import MyStyledComp from "./src/components/MyStyledComp";
import MySizedComp from "./src/components/MySizedComp";
import MyFlexAndAlignComp from "./src/components/MyFlexAndAlignComp";
import MyInputs from "./src/components/MyInputs";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [textBtn, setTextBtn] = useState('');
  const pressBtn = () => {
    if (!inputText) {
      alert('Precisa digitar algo!');
      return;
    }
    setTextBtn('Bem vindo ' + inputText);
  }

  let nome = 'Alexandre';

  //alert('Olá ');

  return (
    <ScrollView style={{ marginTop: 20 }}>
      {/*imagens*/}
      <MyText str={nome} style={{ color: 'purple' }} />

      {/*imagens*/}
      <MyImage imageUri={BASIC_IMAGE_URI} />
      <MyText str="Meu Componente" />

      {/* Usando useState*/}
      <MyText str={count.toString()} />
      <MyButton texto="Increase" onPress={() => setCount(count + 1)} />

      {/*component mostrando estilização*/}
      <MyStyledComp />

      {/*component mostrando trabalho com tamanhos*/}
      <MySizedComp />

      {/*flex box e alinhamento*/}
      <MyFlexAndAlignComp />

      {/*inputs*/}
      <MyInputs />

      <View style={{ height: 100, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Digite seu nome."
          onChangeText={setInputText}
        />
        <Text>{textBtn}</Text>
        <Button title="Clique aqui" onPress={pressBtn} />
      </View>

    </ScrollView>
  );
}

