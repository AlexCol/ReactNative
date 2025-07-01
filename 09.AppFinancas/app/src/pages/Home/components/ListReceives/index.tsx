import { HomeStates } from "../../home.states"
import CalendarioButton from "./components/CalendarioButton";
import CalendarioModal from "./components/CalendarioModal";
import ListReceivesItems from "./components/ListReceivesItems";

type ListReceivesProps = {
  homeStates: HomeStates;
}

function ListReceives({ homeStates }: ListReceivesProps) {
  return (
    <>
      <CalendarioButton homeStates={homeStates} />
      <ListReceivesItems homeStates={homeStates} />
      <CalendarioModal homeStates={homeStates} />
    </>
  )
}

export default ListReceives