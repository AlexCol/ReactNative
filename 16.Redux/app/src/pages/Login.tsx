import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';
import { useSelector } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  /*para usar o redux... dispach é para chamar os metodos dos slices*/
  const dispatch = useDispatch<AppDispatch>();
  /*useSelector é para ler os estados do redux do slice*/
  //const { success, error, loading, message } = useSelector<RootState, AuthState>(state => state.auth);
  const { loading, error, success, message } = useSelector((state: RootState) => state.auth);

  const entrar = async () => {
    dispatch(loginUser({ email, senha }));
  };

  if (loading) { //variavel de loading é setada no slice quando o loginUser é chamado
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

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

      {error && <Text style={{ color: 'red' }}>Erro: {message}</Text>}
      {success && <Text style={{ color: 'green' }}>Sucesso: {message}</Text>}

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