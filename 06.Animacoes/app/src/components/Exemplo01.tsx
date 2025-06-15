
import { useEffect, useRef, useState } from "react";
import { Animated, Text, StyleSheet, View, TouchableOpacity } from "react-native"

function Exemplo01() {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! VARIAVEIS
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [isBig, setIsBig] = useState(false);
  const minWidth = 50;
  const maxWidth = 300;
  const minHeight = 50;
  const maxHeight = 200;
  const larguraAnimada = useRef(new Animated.Value(minWidth)).current;
  const alturaAnimada = useRef(new Animated.Value(minHeight)).current;
  const opacityAnimada = useRef(new Animated.Value(1)).current;
  const newWidthValue = isBig ? maxWidth : minWidth;
  const newHeightValue = isBig ? maxHeight : minHeight;
  const newOpacityValue = isBig ? 0 : 1;
  const [isLooping, setIsLooping] = useState(false);
  const defaultLoopAnimation = Animated.loop(
    Animated.sequence([
      widthAnimation(maxWidth),
      widthAnimation(minWidth),
    ])
  );

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! FUNÇÕES
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function handleUnilateralAnimation() {
    widthAnimation(newWidthValue).start(); //posso por uma função de callback aqui, se quiser: ex: .start(() => console.log('Animação concluída!'));
    setIsBig(!isBig);
  }

  function handleSequentialAnimation() {
    Animated.sequence([
      widthAnimation(newWidthValue),
      heightAnimation(newHeightValue)
    ]).start(); //posso por uma função de callback aqui, se quiser: ex: .start(() => console.log('Animação concluída!'));
    setIsBig(!isBig);
  }

  function handleParallelAnimation() {
    Animated.parallel([
      widthAnimation(newWidthValue),
      heightAnimation(newHeightValue)
    ]).start(); //posso por uma função de callback aqui, se quiser: ex: .start(() => console.log('Animação concluída!'));
    setIsBig(!isBig);
  }

  function handleOpacityAnimation() {
    Animated.sequence([
      widthAnimation(newWidthValue),
      heightAnimation(newHeightValue),
      opacityAnimation(newOpacityValue)
    ]).start(); //posso por uma função de callback aqui, se quiser: ex: .start(() => console.log('Animação concluída!'));
    setIsBig(!isBig);
  }

  function loopAnimation() {
    if (isLooping) {
      setIsLooping(false);
      defaultLoopAnimation.stop();
    } else {
      setIsLooping(true);
      defaultLoopAnimation.start();
    }
  }

  function widthAnimation(newWidthValue: number) {
    return Animated.timing(larguraAnimada, {
      toValue: newWidthValue,
      duration: 1000,
      useNativeDriver: false
    });
  }

  function heightAnimation(newHeightValue: number) {
    return Animated.timing(alturaAnimada, {
      toValue: newHeightValue,
      duration: 1000,
      useNativeDriver: false
    });
  }

  function opacityAnimation(newOpacityValue: number) {
    return Animated.timing(opacityAnimada, {
      toValue: newOpacityValue,
      duration: 1000,
      useNativeDriver: false
    });
  }

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! COMPONENTE
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const animatedStyle = {
    width: larguraAnimada,
    height: alturaAnimada,
    opacity: opacityAnimada,
  }

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View style={[styles.carregandoContainer, animatedStyle]}>
          <Text style={styles.carregandoText}></Text>
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleUnilateralAnimation}>
        <Text style={styles.textBtn}>
          Unilateral
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleSequentialAnimation}>
        <Text style={styles.textBtn}>
          Sequencial (mudando um após o outro)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleParallelAnimation}>
        <Text style={styles.textBtn}>
          Paralela (mudando ao mesmo tempo)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleOpacityAnimation}>
        <Text style={styles.textBtn}>
          Sequencial com Opacidade
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={loopAnimation}>
        <Text style={styles.textBtn}>
          Animação em Loop
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Exemplo01;

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
    width: '100%',
    height: 200,
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