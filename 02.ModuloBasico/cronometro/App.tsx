import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";

function App() {
  const [numero, setNumero] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [historico, setHistorico] = useState<string[]>([]);
  const [volta, setVolta] = useState(0);
  const image = require('./public/images/cronometro.png');
  const isRunning = timer != null;
  const startText = isRunning ? 'NOVA VOLTA' : 'VAI';
  const clearText = isRunning ? 'PARAR' : 'LIMPAR';
  const scrollViewRef = useRef<ScrollView>(null);

  function start() {
    if (isRunning)
      novaVolta();
    else
      ativaTimer();
  }

  function clear() {
    if (isRunning)
      stopTimer();
    else
      resetTimer();
  }

  function ativaTimer() {
    const startTimestamp = Date.now() - numero * 1000;

    const newTimer = setInterval(() => {
      const diff = (Date.now() - startTimestamp) / 1000;
      setNumero(Number(diff.toFixed(1)));
    }, 100);

    setTimer(newTimer);
  }

  function novaVolta() {
    const novaVolta = volta + 1;
    setVolta(novaVolta);
    const novoRegistro = `${novaVolta} => ${numero.toFixed(1)}`;
    setHistorico(prev => [...prev, novoRegistro]);
  }

  function stopTimer() {
    clearInterval(timer!);
    setTimer(null);
    novaVolta();
  }

  function resetTimer() {
    setNumero(0);
    setVolta(0);
    setHistorico([]);
  }

  useEffect(() => { //para o caso do usuário sair da tela sem parar o cronometro
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  // 🔥 Sempre que o historico mudar, rola pro final
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [historico]);

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

        <TouchableOpacity style={[styles.btn, isRunning && styles.btnParar]} onPress={clear}>
          <Text style={styles.btnTexto}>{clearText}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.areaUltima} ref={scrollViewRef}>
        {historico.map((value, index) => (
          <Text style={styles.textoHistorico} key={index}>{value}</Text>
        ))}
      </ScrollView>
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
  btnParar: {
    backgroundColor: '#ffcccb',
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
    marginBottom: 40,
    height: 150, // Defina a altura que desejar
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Opcional para diferenciar o fundo
    borderRadius: 8,
    padding: 10,
  },
  textoHistorico: {
    marginBottom: 5,
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }
});

export default App