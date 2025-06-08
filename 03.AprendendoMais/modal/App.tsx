import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function entrar() {
    setModalVisible(true);
  }
  function sair() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={entrar} />

      <Modal
        animationType="slide" //fade, slide or none
        transparent={true}
        visible={modalVisible}

      >
        {/*por que duas views? explicação abaixo*/}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(150, 150, 150, 0.9)', }}>
          <View style={styles.viewModal}>
            <Text style={styles.textModal}>
              Modal is open!
            </Text>
            <Button title="Close Modal" onPress={sair} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewModal: {
    margin: 15,
    height: 350,
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModal: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20
  }
});

// Explicação sobre as duas views:
// Curta: Adicionar alignItems: 'center' e justifyContent: 'center' no Modal não funciona porque o Modal não é um componente de layout flexível como View. O Modal é uma camada sobreposta que cobre toda a tela, e não se comporta como uma view normal. Para centralizar o conteúdo dentro do Modal, você precisa usar uma view interna com as propriedades de estilo apropriadas.
// A primeira view é para cobrir toda a tela, com um fundo semi-transparente.
// A segunda view é a que contém o conteúdo do modal, com um fundo opaco.
// Isso é necessário para que o modal tenha um efeito de desfoque no fundo e não apenas uma cor sólida.
// Se você usar apenas uma view, o conteúdo do modal ficará sobreposto ao fundo, sem o efeito desejado.
// Além disso, a primeira view permite que o modal ocupe toda a tela, enquanto a segunda view define o tamanho e o estilo do conteúdo do modal.
// A primeira view também pode ser usada para adicionar um efeito de desfoque ou escurecimento ao fundo, tornando o modal mais destacado.
// Além disso, a primeira view pode ser usada para adicionar um efeito de desfoque ou escurecimento ao fundo, tornando o modal mais destacado.
// Em resumo, as duas views são usadas para criar um modal com um fundo semi-transparente e um conteúdo opaco, proporcionando uma melhor experiência visual para o usuário.