import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { HomeStates } from '../../../../home.states';
import { calendarioStyles } from './calendario.styles';

type calendarioProps = {
  homeStates: HomeStates;
}

function Calendario({ homeStates }: calendarioProps) {
  return (
    <View className={calendarioStyles.area}>
      <TouchableOpacity>
        <MaterialIcons name="event" size={30} color="black" />
      </TouchableOpacity>
      <Text className={calendarioStyles.title}>Ultima movimentações</Text>
    </View>
  )
}

export default Calendario