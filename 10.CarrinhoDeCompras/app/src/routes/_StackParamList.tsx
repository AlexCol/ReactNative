import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "../model/Product";
import { CartProduct } from "../types/CartProduct";

// Defina os tipos dos parâmetros das suas rotas
export type StackParamList = {
  Home: undefined;
  Cart: undefined;
};

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;