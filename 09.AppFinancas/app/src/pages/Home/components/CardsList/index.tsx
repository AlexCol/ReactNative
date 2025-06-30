import { FlatList, Text } from "react-native";
import { HomeStates } from "../../home.states";
import { cardsListStyles } from "./cardsList.styles";
import Card from "./components/Card";

type CardsListProps = {
  homeStates: HomeStates
};

function CardsList({ homeStates }: CardsListProps) {
  return (
    <FlatList
      className={cardsListStyles.listBalance}
      data={homeStates.listBalance}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.tag}
      renderItem={({ item }) => <Card balance={item} />}
    />
  )
}

export default CardsList