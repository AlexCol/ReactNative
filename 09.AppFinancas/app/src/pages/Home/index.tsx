import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthValue } from '../../contexts/AuthContext'
import { styles } from './home.styles';
import Header from '../../components/Header';
import useHomeStates from './home.states';
import fetchBalances from './functions/fetchBalances';
import CardsList from './components/CardsList';

function Home() {
  const states = useHomeStates();

  useEffect(() => {
    if (!states.isFocused) return;
    const isActiveRef = { current: true };
    fetchBalances(states, isActiveRef);
    return () => {
      isActiveRef.current = false;
    }
  }, [states.isFocused]);

  return (
    <View className={styles.background}>
      <Header title='Minhas movimentações' />
      <CardsList homeStates={states} />
    </View>
  )
}

export default Home;

