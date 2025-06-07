import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { feedVarType } from '../../../variables';
import { useState } from 'react';

type FeedItemProps = {
  feed: feedVarType;
}

function FeedItem({ feed: param }: FeedItemProps) {
  const basePath = '../../../../assets/img/';
  const [feed, setFeed] = useState(param); // Inicializa o estado com os dados do feed para controlar as interações

  function like() {
    setFeed(prevState => ({
      ...prevState,
      likeada: !prevState.likeada,
      likers: prevState.likeada ? prevState.likers - 1 : prevState.likers + 1
    }));

    // Posterior a ajustar o estado, se adicionaria a  lógica para atualizar o backend ou armazenamento local se necessário.
  }

  return ( //!aqui está tudo junto, mas provavelmente cada parte com comentário em cima poderia ser um componente separado
    <View style={styles.areaFeed}>

      {/*Imagem e nome do usuário*/}
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: feed.imgPerfil }}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>

      {/*Descrição da publicação*/}
      <Image
        resizeMode='cover'
        style={styles.fotoPublicacao}
        source={{ uri: feed.imgPublicacao }}
      />

      {/*Botões de interação*/}
      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={like}>
          <Image
            style={styles.iconeLike}
            source={feed.likeada ? require(`${basePath}likeada.png`) : require(`${basePath}like.png`)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={styles.iconeLike}
            source={require(`${basePath}send.png`)}
          />
        </TouchableOpacity>
      </View>

      {/*Quantidade de likes*/}
      {feed.likers > 0 && (
        <Text style={styles.likes}>
          {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
        </Text>
      )}

      {/*Rodapé com nome e descrição da publicação*/}
      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{feed.nome}</Text>
        <Text style={styles.descRodape}> {feed.descricao}</Text>
      </View>
    </View>
  )
}

export default FeedItem

const styles = StyleSheet.create({
  areaFeed: {
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  viewPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: 'black',
  },
  fotoPublicacao: {
    flex: 1,
    height: 400
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 10,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: 'black',
  },
  likes: {
    fontWeight: 'bold',
    paddingLeft: 5,
  }
});