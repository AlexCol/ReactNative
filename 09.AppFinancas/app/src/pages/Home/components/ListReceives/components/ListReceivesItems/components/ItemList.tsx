import React from 'react'
import { Receives } from '../../../../../../../types/Receive'
import { Text, View } from 'react-native';
import { listReceivesStyles } from '../listReceives.styles';
import { Feather } from '@expo/vector-icons';
import { formatToBrCurrency } from '../../../../../../../util/formatToBrCurrency';

type ItemListProps = {
  receive: Receives;
}

function ItemList({ receive }: ItemListProps) {
  const arrow = receive.type === 'receita' ? 'arrow-up' : 'arrow-down';
  const boxClass = receive.type === 'receita' ? listReceivesStyles.receitaIconView : listReceivesStyles.despesaIconView;

  return (
    <View className={listReceivesStyles.container}>
      <View className={listReceivesStyles.tipo}>
        <View className={boxClass}>
          <Feather name={arrow} size={20} color="#FFF" />
          <Text className={listReceivesStyles.tipoText}>{receive.type.toUpperCase()}</Text>
        </View>
      </View>

      <Text className={listReceivesStyles.valorText}>
        {formatToBrCurrency(receive.value)}
      </Text>
    </View>
  )
}

export default ItemList