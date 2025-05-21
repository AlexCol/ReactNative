import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [frase, setFrase] = useState('');
  const [img, setImg] = useState(require('./public/images/biscoito.png'));
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);
  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  const QuebraBiscoito = () => {
    if (biscoitoAberto) {
      setFrase('');
      setImg(require('./public/images/biscoito.png'));
      setBiscoitoAberto(false);
      return;
    }

    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(`"${frases[randomIndex]}"`);
    setImg(require('./public/images/biscoitoAberto.png'));
    setBiscoitoAberto(true);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={img}
      />

      <Text style={styles.textoFrase}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={QuebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>{biscoitoAberto ? "Novo Biscoito" : "Quebrar biscoito"}</Text>
        </View>
      </TouchableOpacity>
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
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});
