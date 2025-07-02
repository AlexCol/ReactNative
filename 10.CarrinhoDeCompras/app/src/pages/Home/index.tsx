import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Api } from '../../services/api';
import Header from './components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from './components/ProductItem';
import useHomeStates from './home.states';

function Home() {
  const states = useHomeStates();

  useEffect(() => {
    Api.getProducts().then((response) => {
      states.setProdutos(response);
    }).catch((error) => {
      console.error("Erro ao buscar produtos:", error);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Header homeStates={states} />

      <FlatList
        style={{ flex: 1, paddingBottom: 20 }}
        data={states.produtos}
        renderItem={({ item }) => <ProductItem key={item.id} product={item} onAddToCart={states.addToCart} />}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView >
  )
}

export default Home;