import { DrawerNavigationProp } from "@react-navigation/drawer";

// Defina os tipos dos parâmetros das suas rotas
// Na verdade isso aqui é só necessário se você for usar navigator, pois ao informar o destino,
// o TypeScript vai validar se você está passando os parâmetros corretos para a rota

export type MainDrawerParamList = {
  Home: undefined; // Rota para a tela inicial
  NewRegister: undefined; // Rota para a tela de novo registro
  Profile: undefined; // Rota para a tela de perfil
};

export type MainNavigationProp = DrawerNavigationProp<MainDrawerParamList>;