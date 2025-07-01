import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { HomeStates } from '../../../../home.states';
import { calendarioButtonStyles } from './calendarioButton.styles';

type calendarioProps = {
  homeStates: HomeStates;
}

function CalendarioButton({ homeStates }: calendarioProps) {
  const showCalendar = () => homeStates.setIsCalendarioModalVisible(true);

  return (
    <View className={calendarioButtonStyles.area}>
      <TouchableOpacity onPress={showCalendar}>
        <MaterialIcons name="event" size={30} color="black" />
      </TouchableOpacity>
      <Text className={calendarioButtonStyles.title}>Ultima movimentações</Text>
    </View>
  )
}

export default CalendarioButton