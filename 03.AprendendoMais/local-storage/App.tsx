import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const inputRef = useRef<TextInput>(null);
  const textRef = useRef<string>('');
  const [storedValue, setStoredValue] = useState<string>('');

  const handleSave = () => {
    if (!textRef.current) {
      alert('Por favor, digite algo antes de salvar.');
      return;
    }

    setStoredValue(textRef.current);
    Keyboard.dismiss(); // Fecha o teclado
    clearInput();
  }

  const handleClear = async () => {
    await AsyncStorage.removeItem('storedValue');
    setStoredValue('');
    clearInput();
  };

  const clearInput = () => {
    textRef.current = '';
    inputRef.current?.clear();
  }

  useEffect(() => {
    const loadStoredValue = async () => {
      const value = await AsyncStorage.getItem('storedValue');
      if (value !== null)
        setStoredValue(value);
    };
    loadStoredValue();
  }, []);

  useEffect(() => {
    if (!storedValue)
      return;

    const saveValue = async () => {
      await AsyncStorage.setItem('storedValue', storedValue);
    };

    saveValue();
  }, [storedValue]);

  return (
    <View style={styles.container}>
      <Text>Armazenamento Local</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          onChangeText={(text) => textRef.current = text}
          placeholder='Digite algo...'
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity onPress={handleSave} style={styles.botao}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClear} style={styles.botao}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.viewTexto}>
        <Text style={styles.texto}>{storedValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',

  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: 'purple',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
  viewTexto: {
    padding: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: 'black',
  }
});
