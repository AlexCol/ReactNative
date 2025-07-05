import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const entrar = () => {
    console.log('Entrar pressionado');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.nomeInput}>Email:</Text>
      <TextInput value={email}
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={(texto) => setEmail(texto)}
      />

      <Text style={styles.nomeInput}>Senha:</Text>
      <TextInput value={senha}
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(senha) => setSenha(senha)}

      />

      <Button title="Entrar" onPress={entrar} />

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
    color: '#000000',
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    width: 250,
    marginBottom: 10
  }
});