import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthValue } from '../../contexts/AuthContext'
import { styles } from './home.styles';
import Header from '../../components/Header';

function Home() {
  const { id, name, signOut } = useAuthValue();
  return (
    <View className={styles.background}>
      <Header title='Minhas movimentações' />
    </View>
  )
}

export default Home;

