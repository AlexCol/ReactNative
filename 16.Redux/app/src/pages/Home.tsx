import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../App';

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  const cadastrar = () => {
    navigation.navigate('Login');
  }
  const logar = () => {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>

      <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={cadastrar}>
        <Text style={styles.btnTxt}>Fazer Login</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={logar}>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#FF0000',
    padding: 8,
    width: 250,
    borderRadius: 3,
    marginBottom: 5,
  }
});