import { useState } from "react";
import { Balance } from "../../types/Balance";
import { useIsFocused } from "@react-navigation/native";
import { Receives } from "../../types/Receive";

export default function useHomeStates() {
  const [listBalance, setListBalance] = useState<Balance[]>([]);
  const [listReceives, setListReceives] = useState<Receives[]>([]);
  const [dateMoviments, setDateMoviments] = useState<Date>(new Date()); // Default to today's date in YYYY-MM-DD format
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCalendarioModalVisible, setIsCalendarioModalVisible] = useState<boolean>(false);
  const isFocused = useIsFocused();

  return {
    listBalance, setListBalance,
    isLoading, setIsLoading,
    dateMoviments, setDateMoviments,
    listReceives, setListReceives,
    isCalendarioModalVisible, setIsCalendarioModalVisible,
    isFocused,
  }

}

export type HomeStates = ReturnType<typeof useHomeStates>;