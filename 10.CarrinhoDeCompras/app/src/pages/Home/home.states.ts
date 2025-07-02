import { useState } from "react";
import { Product } from "../../model/Product";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../../routes/_StackParamList";
import { useCartContext } from "../../context/CartContext";

export default function useHomeStates() {
  const { productsOnCart, addToCart } = useCartContext();
  const navigation = useNavigation<StackNavigationProp>();
  const [produtos, setProdutos] = useState<Product[]>([]);

  const navigateToCart = () => navigation.navigate('Cart');

  return {
    produtos, setProdutos,
    productsOnCart,
    addToCart,
    navigateToCart
  }
}

export type HomeStates = ReturnType<typeof useHomeStates>;