import { DrawerNavigationProp } from "@react-navigation/drawer";

// Defina os tipos dos parâmetros das suas rotas
export type MainDrawerParamList = {
  Home: undefined; // Rota para a tela inicial
};

export type MainNavigationProp = DrawerNavigationProp<MainDrawerParamList>;