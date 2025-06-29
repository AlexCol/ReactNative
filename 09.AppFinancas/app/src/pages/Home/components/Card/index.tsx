import React, { useMemo } from 'react'
import { Balance } from '../../../../types/Balance'
import { View, Text } from 'react-native';
import { cardsStyles } from './card.style';
import { getLabelName } from './functions/getLabelName';
import { formatToBrCurrency } from './functions/formatToBrCurrency';

type CardProps = {
  balance: Balance
}

function Card({ balance }: CardProps) {
  const labelName = useMemo(() => getLabelName(balance.tag), [balance]);

  if (!labelName) {
    return null; // or handle the case where balance.tag is not recognized
  }

  return (
    <View className={`${cardsStyles.container} ${labelName.color}`}>
      <Text className={cardsStyles.label}>{labelName.label}</Text>
      <Text className={cardsStyles.balance}>{formatToBrCurrency(balance.saldo)}</Text>
    </View>
  );
}

export default Card