import React from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native';

const baseColor = 'rgb(87, 12, 173)';
type AppInputProps = {
  cep: string;
  handleChange: (text: string) => void;
}

function AppInput({ cep, handleChange }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Informe o CEP:</Text>
      <TextInput
        style={styles.input}
        placeholder='00000-000'
        maxLength={9}
        value={cep}
        onChangeText={handleChange}
        keyboardType="numeric"
        cursorColor={baseColor}
      />
    </View>
  )
}

export default AppInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: baseColor,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: baseColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  }

});