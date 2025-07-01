import React from 'react'
import { Receives } from '../../../../../../../types/Receive'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native';
import { listReceivesStyles } from '../listReceives.styles';
import { Feather } from '@expo/vector-icons';
import { formatToBrCurrency } from '../../../../../../../util/formatToBrCurrency';
import deleteItem from '../../../../../functions/deleteItem';
import { HomeStates } from '../../../../../home.states';

type ItemListProps = {
  receive: Receives;
  states: HomeStates;
}

function ItemList({ receive, states }: ItemListProps) {
  const arrow = receive.type === 'receita' ? 'arrow-up' : 'arrow-down';
  const boxClass = receive.type === 'receita' ? listReceivesStyles.receitaIconView : listReceivesStyles.despesaIconView;

  const handleDeleteItem = async () => await deleteItem(receive, states);

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <View className={listReceivesStyles.container}>
        <View className={listReceivesStyles.tipo}>
          <View className={boxClass}>
            <Feather name={arrow} size={20} color="#FFF" />
            <Text className={listReceivesStyles.tipoText}>{receive.type.toUpperCase()}</Text>
          </View>
        </View>

        <Text className={listReceivesStyles.valorText} numberOfLines={1}>
          {`${formatToBrCurrency(receive.value)} - ${receive.description}`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ItemList