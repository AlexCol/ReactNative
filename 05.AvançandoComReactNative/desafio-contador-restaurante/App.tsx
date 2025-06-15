import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [clientes, setClientes] = useState(0);
  const [isRestaurantFull, setIsRestaurantFull] = useState(false);
  const addDisabled = clientes >= 10;
  const removeDisabled = clientes <= 0;

  const addClientHandler = () => {
    setClientes(clientes + 1);
    if (clientes == 9) {
      setIsRestaurantFull(true);
    }
  }
  const removeClientHandler = () => {
    setClientes(clientes - 1);
    if (clientes == 10) {
      setIsRestaurantFull(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Mensagens topo */}
      <Text style={styles.title}>Desafio Contador Restaurante</Text>
      <Text style={styles.subtitle}>Clientes</Text>

      {/* Contador de Clientes */}
      <Text style={styles.contador}>{clientes}</Text>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addClientHandler} disabled={addDisabled}>
          <View style={[styles.button, addDisabled ? styles.buttonDisabled : styles.buttonAdd]}>
            <Text style={styles.buttonText}>Adicionar Cliente</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeClientHandler} disabled={removeDisabled}>
          <View style={[styles.button, removeDisabled ? styles.buttonDisabled : styles.buttonRemove]}>
            <Text style={styles.buttonText}>Remover Cliente</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mensagem de alerta para restaurante cheio */}
      <Text style={styles.alert}>
        {isRestaurantFull && "O restaurante está cheio!"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  contador: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  buttonAdd: {
    backgroundColor: '#4CAF50', // Green
  },
  buttonRemove: {
    backgroundColor: '#F44336', // Red
  },
  buttonDisabled: {
    backgroundColor: '#ccc', // Gray for disabled state
  },
  buttonText: {
    color: '#fff',
  },
  alert: {
    marginTop: 20,
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
