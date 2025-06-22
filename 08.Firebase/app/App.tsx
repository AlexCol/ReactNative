import { useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './src/database/index';
import IUser from './src/model/IUser';
import { fetchUserObserver } from './src/services/app/app.fetchUserObserver';
import { appStyles } from './src/services/app/app.styles';
import { registerUser } from './src/services/app/app.registerUser';

// arquivos de CRUD na pasta services/app
//! CREATE -- em registerUser
//! READ -- em fetchUser e fetchUserObserver

export default function App() {
  const [id, setId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const btnDisabled = loading || !nome || !idade || !cargo;
  const btnStyle = [appStyles.btn, btnDisabled ? appStyles.disabledBtn : appStyles.enabledBtn];

  useEffect(() => {
    //fetchUser({ id, setUser, setLoading }); //usando forma tradicional de chamada ao banco, chamou, pegou os dados e fecha a conexão
    fetchUserObserver({ id, setUser, setLoading }); //usando forma de observação, chama o banco e fica ouvindo as mudanças, atualizando os dados em tempo real
  }, [id]);

  async function handleRegister() {
    const newUser: IUser = { nome, idade, cargo };
    await registerUser({ user: newUser, setId, setLoading });
    clearRefs();
  }

  function clearRefs() {
    setNome('');
    setIdade('');
    setCargo('');
  }

  if (loading) {
    return (
      <View style={appStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={appStyles.container}>
      <Text>Database initialized: {db ? 'Yes' : 'No'}</Text>
      <Text>Nome: {user.nome}</Text>
      <Text>Idade: {user.idade}</Text>
      <Text>Cargo: {user.cargo}</Text>

      <TouchableOpacity onPress={() => setShowForm(!showForm)} style={{ marginTop: 8 }}>
        <Text style={{ textAlign: 'center', color: 'red' }}>{showForm ? 'Fechar Formulário' : 'Abrir Formulário'}</Text>
      </TouchableOpacity>

      {showForm && (
        <View style={appStyles.inputContainer}>
          <TextInput
            style={appStyles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={appStyles.input}
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType='numeric'
          />
          <TextInput
            style={appStyles.input}
            placeholder="Cargo"
            value={cargo}
            onChangeText={setCargo}
          />

          <TouchableOpacity disabled={btnDisabled} onPress={handleRegister} style={btnStyle}>
            <Text style={appStyles.btnText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

