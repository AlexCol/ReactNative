import { FlatList, Text } from "react-native";
import { HomeStates } from "../../../../home.states";
import ItemList from "./components/ItemList";
import { listReceivesStyles } from "./listReceives.styles";

type ListReceivesItemsProps = {
  homeStates: HomeStates;
}

function ListReceivesItems({ homeStates }: ListReceivesItemsProps) {
  return (
    <FlatList
      className={listReceivesStyles.list}
      data={homeStates.listReceives}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemList receive={item} states={homeStates} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text className={listReceivesStyles.emptyText}>Nenhum registro encontrado</Text>
      )}
      contentContainerStyle={{ paddingBottom: 20 }} // Add padding to the bottom to avoid content being cut off
    //ListFooterComponent={() => <Text className={listReceivesStyles.emptyText}>Fim da lista</Text>}
    />
  )
}

export default ListReceivesItems