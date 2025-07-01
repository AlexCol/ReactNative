import React from 'react'
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { HomeStates } from '../../../../home.states'
import { calendarioModalStyles } from './calendarioModal.styles'

type CalendarioModalProps = {
  homeStates: HomeStates
}

function CalendarioModal({ homeStates }: CalendarioModalProps) {
  return (
    <Modal
      visible={homeStates.isCalendarioModalVisible}
      transparent={true}
      animationType="fade"
    >
      <View className={calendarioModalStyles.container}>
        {/* Componente com flex-1 *de 3* para ocupar 1/3 da tela, e ao clicar fechar o modal*/}
        <TouchableWithoutFeedback onPress={() => homeStates.setIsCalendarioModalVisible(false)}>
          <View className={calendarioModalStyles.overlay}></View>
        </TouchableWithoutFeedback>

        {/* View com flex-2 *de 3* para ocupar 2/3 da tela, e mostrar o calendario - optei por não componentizar*/}
        <View className={calendarioModalStyles.modalContent}>
          <TouchableOpacity className={calendarioModalStyles.buttonFilter}>
            <Text className={calendarioModalStyles.buttonFilterText}>Filtrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default CalendarioModal;