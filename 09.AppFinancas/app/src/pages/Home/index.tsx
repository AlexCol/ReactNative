import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from './home.styles';
import Header from '../../components/Header';
import useHomeStates from './home.states';
import CardsList from './components/CardsList';
import ListReceives from './components/ListReceives';
import fetchData from './functions/fetchData';

function Home() {
  const states = useHomeStates();

  useEffect(() => {
    const isActiveRef = { current: true };
    fetchData({ states, isActiveRef });
    return () => {
      isActiveRef.current = false;
    }
  }, [states.isFocused, states.dateMoviments]);

  return (
    <View className={styles.background}>
      <Header title='Minhas movimentações' />
      <CardsList homeStates={states} />
      <ListReceives homeStates={states} />
    </View>
  )
}
export default Home;