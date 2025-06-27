import { DrawerNavigationOptions } from "@react-navigation/drawer";

export interface DrawerScreenConfig {
  name: string; // Nome da rota
  component: React.ComponentType<any>; // Componente da rota
  options?: DrawerNavigationOptions; // Opções de navegação
}