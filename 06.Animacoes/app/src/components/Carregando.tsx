
import { useEffect, useRef, useState } from "react";
import { Animated, Text, StyleSheet, View, TouchableOpacity } from "react-native"

function Carregando() {
  const [isBig, setIsBig] = useState(false);
  const larguraAnimada = useRef(new Animated.Value(250)).current;

  useEffect(() => {
    const newWidthValue = isBig ? 300 : 150;
    Animated.timing(larguraAnimada, {
      toValue: newWidthValue,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }, [isBig]);

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.View style={[styles.carregandoContainer, { width: larguraAnimada, }]}>
        <Text style={styles.carregandoText}>Carregando...</Text>
      </Animated.View>

      <TouchableOpacity onPress={() => setIsBig(!isBig)}>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18, color: '#4169e1' }}>
          Clique aqui para ver a animação
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Carregando;

const styles = StyleSheet.create({
  carregandoContainer: {
    height: 150,
    backgroundColor: '#4169e1',
    justifyContent: 'center',
    marginBottom: 20,
  },
  carregandoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  }
});

//! PARA ANIMAÇÕES, CUIDADO!!!!
/*
O StyleSheet.create é uma função que gera objetos de estilo estáticos e imutáveis no React Native.
Ele não entende valores animados (Animated.Value). Quando você passa uma Animated.Value dentro de um StyleSheet.create,
ele simplesmente lê o valor atual no momento da criação (que geralmente é zero se ainda não foi alterado) e não escuta
as futuras mudanças.
*/

//? OBSERVAÇÃO DOIS
/*
Ao usar Animated.timing, é importante cuidar o alinhamento do componente animado.
Deve-se ter alignItems = "center" no componente pai (ex: View que engloba o Animated.View), ou o proprio componente deve ter
alignSelf = "center". Caso contrário o componente não se moverá igualmente na direita e esquerda, pois o comportamento
padrão do Animated.View é flex-start, ou seja, ele se alinha ao início do eixo principal (horizontal).
*/