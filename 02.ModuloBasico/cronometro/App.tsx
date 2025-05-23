import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

function App() {
  const [numero, setNumero] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [historico, setHistorico] = useState<string[]>([]);
  const [volta, setVolta] = useState(0);
  const image = require('./public/images/cronometro.png');
  const startText = timer ? 'REINICIAR' : 'VAI';
  const clearText = timer ? 'PARAR' : 'LIMPAR';

  function start() {
    if (!timer)
      setTimer(
        setInterval(() => setNumero((current) => current + 0.1))
      );
  }

  function clear() {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      const novaVolta = volta + 1;
      setVolta(novaVolta);
      historico.push(`${novaVolta} => ${numero.toFixed(1)}`);
      setHistorico(historico);
    } else {
      setNumero(0);
      setVolta(0);
      setHistorico([]);
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={image}
        style={styles.cronometro}
      />

      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnTexto}>{startText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={clear}>
          <Text style={styles.btnTexto}>{clearText}</Text>
        </TouchableOpacity>
      </View>

      <View>
        {historico && historico.map((value, index) => (
          <Text key={index}>{value}</Text>
        ))}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {

  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});

export default App