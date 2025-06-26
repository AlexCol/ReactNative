import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { SignInStackParamList } from "../SignInStack/_SignInStackParamList";

export interface StackScreenConfig {
  name: string; // Nome da rota
  component: React.ComponentType<any>; // Componente da rota
  options?: NativeStackNavigationOptions; // Opções de navegação
}