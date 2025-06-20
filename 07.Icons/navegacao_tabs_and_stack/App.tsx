import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes />
    </View>
  );
}

/*
resumo:
-- Criado AppRoutes como gerenciador das rotas bottom tab. Nela é informado em um array quais componentes serão exibidos 
na tab bar, e cada componente tem sua configuração de navegação.
-- Os componenentes Sobre e Cotatos são únicos, então suas configurações de navegação estão no arquivo 
{nome}.config.screen.tsx, que é importado no AppRoutes.

-- A tela Home é um stack, então ela tem seu próprio arquivo de rotas, que é importado no AppRoutes.
Foi criada a tela Detalhes; que é adicionada a stack de navegação de Home.
- A tipagem das rotas foi feita separada, em _RootHomeStackParamList.
- Em HomeStackRoutes apliquei as configurações diretamente no arquivo, sem divisão, para simplificar. Mas se fosse
o caso poderia ter algo semelhante ao AppRoutes.
-- Por fim, a stack foi adicionada em home.config.screen.tsx, que depois é injetada em AppRoutes.tsx,

-- Em home uso dois navigators, um para navegar na Stack e ir para Detalhes e outro para navegar na Tab e ir para Sobre.
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center', //ao usar navigators, não pode ter esse alinhamento
  },
});
