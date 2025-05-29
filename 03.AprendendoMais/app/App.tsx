import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import MyScrollView from './components/MyScrollView';
import MyFlatList from './components/MyFlatList';
import MyPicker from './components/MyPicker';

export default function App() {
  return (
    <View>
      {/* <MyScrollView /> */}
      {/* <MyFlatList /> */}
      <MyPicker />
    </View>
  );
}

/*
Dif entre ScrollView e FlatList:
ScrollView é usado para exibir uma lista de itens que não são muito grandes, enquanto 
FlatList é otimizado para listas longas e grandes, carregando apenas os itens visíveis na tela.
--FlatList também oferece melhor desempenho e recursos adicionais, como rolagem infinita e separadores entre os itens.
*/