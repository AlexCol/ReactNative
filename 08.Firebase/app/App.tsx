import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { db } from './src/database/index';
import { fetchUserObserver } from './src/services/app/app.fetchUserObserver';
import { appStyles } from './src/services/app/app.styles';
import appUseForm from './src/services/app/app.setters';
import AppInput from './src/services/app/components/AppInput';
import AccessInputButton from './src/services/app/components/AppAccessInputButton';
import AppTopHeader from './src/services/app/components/AppTopHeader';

// arquivos de CRUD na pasta services/app
//! CREATE -- em registerUser
//! READ -- em fetchUser e fetchUserObserver

export default function App() {
  const states = appUseForm(); //demonstração de uso de useState em um arquivo separado, para não poluir o App.tsx

  useEffect(() => {
    //fetchUser(states); //usando forma tradicional de chamada ao banco, chamou, pegou os dados e fecha a conexão
    fetchUserObserver(states); //usando forma de observação, chama o banco e fica ouvindo as mudanças, atualizando os dados em tempo real
  }, [states.id]);

  if (states.loading) {
    return (
      <View style={appStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={appStyles.container}>
      <AppTopHeader db={db} states={states} />
      <AccessInputButton states={states} />
      {states.showForm && <AppInput states={states} />}
    </View>
  );
}

