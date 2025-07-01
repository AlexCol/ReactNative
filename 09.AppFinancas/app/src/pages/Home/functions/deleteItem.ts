import { Alert } from "react-native";
import { Receives } from "../../../types/Receive";
import { HomeStates } from "../home.states";
import api from "../../../services/api";

export default async function deleteItem(item: Receives, homeStates: HomeStates) {
  Alert.alert(
    "Atenção",
    `Você realmente deseja excluir o item "${item.description}"?`,
    [
      { text: "Continuar", onPress: async () => { await executeDelete(item, homeStates) } },
      { text: "Cancelar", style: "cancel" },
    ]
  );
}

async function executeDelete(item: Receives, homeStates: HomeStates) {
  homeStates.setIsLoading(true);
  try {
    await api({
      method: "delete",
      url: `/receives/delete`,
      params: {
        item_id: item.id
      }
    });

    homeStates.setDateMoviments(new Date());
    Alert.alert("Sucesso", "Item excluído com sucesso!");
  } catch (error) {
    Alert.alert("Erro", "Não foi possível excluir o item. Tente novamente mais tarde.");
  } finally {
    homeStates.setIsLoading(false);
  }
}