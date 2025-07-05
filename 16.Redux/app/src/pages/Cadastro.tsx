import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

export default function Cadastro() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const cadastrar = () => {
    console.log('Cadastrar pressionado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nomeInput}>Email:</Text>
      <TextInput value={email} underlineColorAndroid="transparent" style={styles.input}
        onChangeText={(emailDigitado) => setEmail(emailDigitado)} />

      <Text style={styles.nomeInput}>Senha:</Text>
      <TextInput value={senha} underlineColorAndroid="transparent"
        secureTextEntry={true} style={styles.input}
        onChangeText={(senhaDigitada) => setSenha(senhaDigitada)} />

      <Button title="Cadastrar" onPress={cadastrar} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nomeInput: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 5
  },
  input: {
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    width: 250,
    marginBottom: 10
  }
});