import { Text, TouchableOpacity, View } from "react-native"
import styles from "./sobre.styles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/_RootStackParamList";
import { useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/**
 * EXPLICAÇÃO SOBRE TIPAGEM DO REACT NAVIGATION:
 * 
 * O React Navigation passa um OBJETO GIGANTE com 100+ propriedades para cada componente:
 * {
 *   route: { key, name, params, path, ... },
 *   navigation: { navigate, goBack, push, pop, reset, ... },
 *   ... outras propriedades internas
 * }
 * 
 * 1. SobreRouteProp = tipa APENAS da propriedade 'route'
 * 2. Props = tipo do objeto que contém { route: SobreRouteProp }
 * 3. { route }: Props = desestruturação que extrai APENAS 'route' do objeto gigante
 * 4. TypeScript garante que route.params tem exatamente { nome?, idade?, cidade? }
 */
type SobreRouteProp = RouteProp<RootStackParamList, 'Sobre'>;
type SobreNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Sobre'>;

type Props = {
  route: SobreRouteProp;
};

function Sobre({ route }: Props) {
  const navigation = useNavigation<SobreNavigationProp>();

  const { nome, idade, cidade } = route.params || {};
  //const { nome, idade, cidade } = useRoute<SobreRouteProp>().params || {}; // Alternativa usando useRoute (sem precisar dos props):

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Tela Sobre: ${nome || 'Desconhecido'}`,
      headerStyle: {
        backgroundColor: '#ee0062', // cor do header
      },
    });
  }, []);

  const navegarParaContatos = () => {
    navigation.navigate("Contatos");
  }

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>

      <TouchableOpacity style={styles.btn} onPress={navegarParaContatos}>
        <Text style={styles.textBtn}>Ir para Contatos</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Sobre;