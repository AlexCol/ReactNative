import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const sexosDisponiveis: string[] = ['Masculino', 'Feminino'];
  const [sexo, setSexo] = useState(sexosDisponiveis[0]);
  const [saldo, setSaldo] = useState(0);
  const [estudante, setEstudante] = useState(false);

  const isValidData = (): boolean => {
    if (!nome)
      return false;
    if (Number.isNaN(idade))
      return false;
    if (Number.parseInt(idade) <= 0)
      return false;

    return true;
  }

  const mostraCliente = () => {
    if (!isValidData()) {
      alert('Todos os dados precisam ser preenchidos com dados validos!')
      return;
    }

    const linhas: string[] = [];

    linhas.push(`${sexo === sexosDisponiveis[0] ? 'Bem Vindo' : 'Bem Vinda'} ${nome}!`);

    if (!Number.isNaN(idade) && Number.parseInt(idade) < 18) {
      linhas.push("Infelizmente não podemos abrir conta para menores de idade!")
      alert(linhas.join('\n'));
      return;
    }

    const mensagemInicial = estudante
      ? 'Esperamos poder lhe ajudar com seus estudos!'
      : 'Esperamos por uma longa e duradoura parceria!';

    linhas.push(mensagemInicial);
    alert(linhas.join('\n'));

  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Bem vindo ao Banco do Desafio!</Text>
      <Text style={styles.textBottom}>Para criar sua conta, informe seus dados!</Text>
      <StatusBar style='auto' />
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome!'
        value={nome}
        onChangeText={setNome}
        //secureTextEntry={false} // Use true if you want to hide the text (for passwords)
        keyboardType="default" // Use "numeric" for numbers, "email-address" for emails
        maxLength={50}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite sua idade!'
        value={idade}
        onChangeText={setIdade}
        //secureTextEntry={false} // Use true if you want to hide the text (for passwords)
        keyboardType="numeric" // Use "default" for text, "email-address" for emails
        maxLength={50}
      />

      <View style={styles.sexoView}>
        <Text style={styles.sexoText} >Sexo</Text>
        <Picker style={styles.picker} selectedValue={sexo} onValueChange={(itemValue) => setSexo(itemValue)} >
          {
            sexosDisponiveis.map((sexo, index) => (
              <Picker.Item key={index} value={index} label={sexo} />
            ))
          }
        </Picker>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 15 }}>
        <Text>Informe seu saldo incial!</Text>
        <Slider
          thumbTintColor='purple'
          step={100}
          minimumValue={0}
          minimumTrackTintColor='red'
          maximumValue={15000}
          maximumTrackTintColor='blue'
          style={{ width: 300 }}
          onValueChange={(valor) => setSaldo(valor)}
        />
        <Text>Seu saldo: R$ {saldo.toLocaleString('pt-Br')}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        <Text>Estudante: </Text>
        <Switch
          value={estudante}
          onValueChange={(value) => setEstudante(value)}
          trackColor={{ false: "gray", true: "green" }} // Cor do track quando o switch está desligado e ligado
          thumbColor="purple" // Cor do thumb (círculo que desliza)
          ios_backgroundColor="lightgray" // Cor de fundo no iOS quando o switch está desligado
        />
      </View>

      <Button
        title='Criar conta!'
        onPress={() => mostraCliente()}
      />

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTop: {
    fontSize: 20,
  },
  textBottom: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  sexoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sexoText: {
    fontSize: 16,
    marginRight: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 5,
  }
});
