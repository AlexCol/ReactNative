import React, { useState } from 'react'
import { Modal, StyleProp, Text, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import { HomeStates } from '../../../../home.states'
import { calendarioModalStyles } from './calendarioModal.styles'
import { Calendar } from 'react-native-calendars'
import { MarkedDates, Theme } from 'react-native-calendars/src/types'
import dayjs from 'dayjs';

type CalendarioModalProps = {
  homeStates: HomeStates
}

//!localização funciona de maneira global, não precisa estar no arquivo do calendário 
function CalendarioModal({ homeStates }: CalendarioModalProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const closeModal = () => homeStates.setIsCalendarioModalVisible(false);

  const fetch = () => {
    if (!selectedDate)
      return;
    const date = dayjs(selectedDate, 'YYYY-MM-DD').toDate();
    homeStates.setDateMoviments(date);
    closeModal();
  }

  const onPressDay = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);

    const marked: MarkedDates = {};
    marked[day.dateString] = { selected: true, selectedColor: 'blue' };
    setMarkedDates(marked);
  }

  return (
    <Modal
      visible={homeStates.isCalendarioModalVisible}
      transparent={true}
      animationType="fade"
    >
      <View className={calendarioModalStyles.container}>
        {/* Componente com flex-1 *de 3* para ocupar 1/3 da tela, e ao clicar fechar o modal*/}
        <TouchableWithoutFeedback onPress={closeModal}>
          <View className={calendarioModalStyles.overlay}></View>
        </TouchableWithoutFeedback>

        {/* View com flex-2 *de 3* para ocupar 2/3 da tela, e mostrar o calendario - optei por não componentizar*/}
        <View className={calendarioModalStyles.modalContent}>
          <Calendar
            enableSwipeMonths={true}
            style={calendarStyles}
            theme={calendarTheme}
            onDayPress={onPressDay}
            markedDates={markedDates}
          />

          {/*botao para mandar processar as datas selecionadas*/}
          <TouchableOpacity className={calendarioModalStyles.buttonFilter} onPress={fetch}>
            <Text className={calendarioModalStyles.buttonFilterText}>Filtrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default CalendarioModal;

const calendarTheme: Theme = {
  //todayTextColor: 'rgba(255, 0, 0, 1)',
  todayBackgroundColor: 'rgba(0, 173, 245, 1)',
  todayTextColor: 'rgba(255, 255, 255, 1)',
}

const calendarStyles: StyleProp<ViewStyle> = {
  height: 350,
  marginBottom: 20,
}