import { useState } from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'

type feed = {
  nome: string,
  idade: number,
  email: string,
}

function MyFlatList() {
  const [feed, setFeed] = useState<feed[]>([
    { nome: 'Alexandre', idade: 39, email: 'alexandre@coletti.com.br' },
    { nome: 'Bernard', idade: 22, email: 'bernard@coletti.com.br' },
    { nome: 'Deise', idade: 45, email: 'deise@brum.com.br' },
    { nome: 'Camargo', idade: 45, email: 'camargo@brum.com.br' },
    { nome: 'Matheus', idade: 22, email: 'matheus@coletti.com.br' },
    { nome: 'Maria', idade: 18, email: 'maria@coletti.com.br' },
  ]);

  return (
    <FlatList
      data={feed}
      keyExtractor={(item) => item.email} //forma de informar a 'key' dos itens da lista
      renderItem={({ item }) => <Pessoa {...item} />}
    />
  )
}

export default MyFlatList

function Pessoa({ nome, idade, email }: feed) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>Nome: {nome}</Text>
      <Text style={styles.textoPessoa}>Idade: {idade}</Text>
      <Text style={styles.textoPessoa}>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
});