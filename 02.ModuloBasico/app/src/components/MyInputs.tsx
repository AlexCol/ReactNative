import { useState } from "react";
import { StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from "react-native"

function MyInputs() {
  const { styleMainView, styleInput, styleText } = MyStyles();
  const [text, setText] = useState<string>('')
  return (
    <View style={styleMainView}>
      <TextInput
        style={styleInput}
        value={text}
        placeholder="Digite algo aqui"
        underlineColorAndroid={'transparent'}
        onChangeText={setText}
      />
      <Text style={styleText}>{text || 'Seu texto digitado aparecerá aqui!'}</Text>
    </View>
  )
}

export default MyInputs

function MyStyles() {
  const styleMainView: StyleProp<ViewStyle> = {
    flex: 1,
    height: 700,
    backgroundColor: 'gray',
  }
  const styleInput: StyleProp<TextStyle> = {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10
  };

  const styleText: StyleProp<TextStyle> = {
    textAlign: 'center',
    fontSize: 25,
  };

  return { styleMainView, styleInput, styleText }
}