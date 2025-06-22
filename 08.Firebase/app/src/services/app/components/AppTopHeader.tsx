import { Text, View } from 'react-native';
import { Firestore } from "firebase/firestore";
import { AppUseFormType } from "../app.setters";

type AppTopHeaderProps = {
  db: Firestore | null;
  states: AppUseFormType;
}

function AppTopHeader({ db, states }: AppTopHeaderProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Database initialized: {db ? 'Yes' : 'No'}</Text>
      <Text>Nome: {states.user.nome}</Text>
      <Text>Idade: {states.user.idade}</Text>
      <Text>Cargo: {states.user.cargo}</Text>
    </View>
  )
}

export default AppTopHeader