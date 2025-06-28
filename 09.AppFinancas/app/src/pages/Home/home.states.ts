import { useState } from "react";
import { Balance } from "../../types/Balance";

export default function useHomeStates() {
  const [listBalance, setListBalance] = useState<Balance[]>([]);
  const [dateMoviments, setDateMoviments] = useState<Date>(new Date()); // Default to today's date in YYYY-MM-DD format
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return {
    listBalance, setListBalance,
    isLoading, setIsLoading,
    dateMoviments, setDateMoviments
  }

}

export type HomeStates = ReturnType<typeof useHomeStates>;