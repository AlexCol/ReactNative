
import { useEffect, useRef, useState } from "react";
import { Animated, Text, StyleSheet, View, TouchableOpacity } from "react-native"

function Exemplo02() {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! VARIAVEIS
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [render, setRender] = useState(false);
  const larguraAnimada = useRef(new Animated.Value(10)).current;
  const alturaAnimada = useRef(new Animated.Value(10)).current;

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! COMPONENTE
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [10, 100],
    outputRange: ['10%', '100%'],
  });
  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [10, 100],
    outputRange: ['10%', '100%'],
  });

  const animatedStyle = {
    width: porcentagemLargura,
    height: porcentagemAltura,
  }
  useEffect(() => {
    larguraAnimada.setValue(10);
    alturaAnimada.setValue(10);

    Animated.sequence(
      [
        Animated.timing(larguraAnimada, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(alturaAnimada, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        })
      ]
    ).start(() => alert('Animação concluída!'));
  }, [render]);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View style={[styles.carregandoContainer, animatedStyle]}>
          <Text style={styles.carregandoText}></Text>
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => setRender(!render)}>
        <Text style={styles.textBtn}>
          Recarregar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Exemplo02;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! ESTILOS
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    flex: 1,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
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
  },
  btn: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textBtn: {
    color: '#fff',
    fontSize: 18,
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