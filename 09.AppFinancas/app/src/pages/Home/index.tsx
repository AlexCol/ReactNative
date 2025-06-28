import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthValue } from '../../contexts/AuthContext'
import { styles } from './home.styles';
import Header from '../../components/Header';
import useHomeStates from './home.states';
import fetchBalances from './functions/fetchBalances';

function Home() {
  const states = useHomeStates();

  useEffect(() => {
    const isActiveRef = { current: true };
    fetchBalances(states, isActiveRef);
    return () => {
      isActiveRef.current = false;
    }
  }, []);

  return (
    <View className={styles.background}>
      <Header title='Minhas movimentações' />
    </View>
  )
}

export default Home;

