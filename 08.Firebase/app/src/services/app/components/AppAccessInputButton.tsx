import { Text, TouchableOpacity } from "react-native"
import appUseForm from "../app.setters";

type AppAccessInputButtonProps = {
  states: ReturnType<typeof appUseForm>;
}

function AppAccessInputButton({ states }: AppAccessInputButtonProps) {
  return (
    <TouchableOpacity onPress={() => states.setShowForm(!states.showForm)} style={{ marginTop: 8 }}>
      <Text style={{ textAlign: 'center', color: 'red' }}>{states.showForm ? 'Fechar Formulário' : 'Abrir Formulário'}</Text>
    </TouchableOpacity>
  )
}

export default AppAccessInputButton