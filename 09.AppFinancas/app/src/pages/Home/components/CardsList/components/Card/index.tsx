import React, { useMemo } from 'react'
import { Balance } from '../../../../../../types/Balance'
import { View, Text } from 'react-native';
import { cardsStyles } from './card.style';
import { getLabelName } from './functions/getLabelName';
import { formatToBrCurrency } from '../../../../../../util/formatToBrCurrency';

type CardProps = {
  balance: Balance
}

function Card({ balance }: CardProps) {
  const labelName = useMemo(() => getLabelName(balance.tag), [balance]);
  const saldo = useMemo(() => formatToBrCurrency(balance.saldo), [balance.saldo]);

  if (!labelName) {
    return null; // or handle the case where balance.tag is not recognized
  }

  return (
    <View className={`${cardsStyles.container} ${labelName.color}`}>
      <Text className={cardsStyles.label}>{labelName.label}</Text>
      <Text className={cardsStyles.balance}>{saldo}</Text>
    </View>
  );
}

export default Card