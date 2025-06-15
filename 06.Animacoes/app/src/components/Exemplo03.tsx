import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

function Exemplo03() {
  const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity); //¹
  const textRef = useRef<Animatable.Text>(null) as React.RefObject<Animatable.Text>;

  const handleAnimate = () => {
    const funcName = 'slideInUp'; //ou 'bounceIn', 'pulse', 'shake', 'fadeIn', etc.

    if (typeof textRef.current[funcName] === 'function') { //²
      textRef.current[funcName]();
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        ref={textRef} /*³*/
      >Exemplo 03</Animatable.Text>

      <ButtonAnimated
        style={styles.btn}
        animation={'pulse'} //ou 'bounce', 'shake', 'fadeIn', etc.
        onPress={handleAnimate}
      >
        <Text style={styles.btnText}>Animar</Text>
      </ButtonAnimated>
    </View>
  )
}

export default Exemplo03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    backgroundColor: '#4169e1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

//! OBSERVAÇÕES
/*
¹ Animatable.TouchableOpacity não funciona, mas com Animatable.createAnimatableComponent podemos criar um 
  componente animado a partir de TouchableOpacity.

² A verificação de tipo é necessária para garantir que o método de animação existe no componente referenciado.
  Isso evita erros caso o nome da função não seja válido ou não exista.
  O próprio compilador não deixa seguir com o código se não for verificado, pois o textRef é do tipo Animatable.Text
  e não tem certeza se o método existe.

³ Código da animação fixa:
  animation={'flipInX'}
  iterationCount={5} //numero ou 'Infinity'
  duration={2000} //milisegundos

*/
