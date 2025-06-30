import { HomeStates } from "../../home.states"
import Calendario from "./components/Calendario";
import ListReceivesItems from "./components/ListReceivesItems";

type ListReceivesProps = {
  homeStates: HomeStates;
}

function ListReceives({ homeStates }: ListReceivesProps) {
  return (
    <>
      <Calendario homeStates={homeStates} />
      <ListReceivesItems homeStates={homeStates} />
    </>
  )
}

export default ListReceives