import { HomeStates } from "../home.states";
import fetchBalances from "./fetchBalances";
import fetchReceives from "./fetchReceives";

type fetchDataProps = {
  states: HomeStates;
  isActiveRef: { current: boolean };
}

async function fetchData({ states, isActiveRef }: fetchDataProps) {
  if (!states.isFocused) return;
  states.setIsLoading(true);
  await Promise.all([
    fetchReceives(states, isActiveRef),
    fetchBalances(states, isActiveRef)
  ]);
  states.setIsLoading(false);
}

export default fetchData;