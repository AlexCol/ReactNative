import { createContext, ReactNode, useContext } from "react";
import { Product } from "../model/Product";
import { CartProduct } from "../types/CartProduct";
import useCartContexStates from "./cartContextStates";

//*************************************************************
//* Tipagens para o contexto
//*************************************************************
export type CartContextType = {
  productsOnCart: CartProduct[],
  addToCart: (produto: Product) => void,
  removeFromCart: (produto: Product) => void,
};

//*************************************************************
//* Criando o contexto, com base no tipo acima
//*************************************************************
export const CartContext = createContext<CartContextType | undefined>(undefined);

//*************************************************************
//* Componente Provider do contexto (onde são iniciadas as 
//* variáveis de estado e as funções que serão passadas no value)
//* E então passadas no value para serem usadas pelos componentes filhos
//*************************************************************
export function CartProvider({ children }: { children: ReactNode }) {
  const states = useCartContexStates();

  const providerValue: CartContextType = {
    productsOnCart: states.selectedProductsAsArray,
    addToCart: states.addToCart,
    removeFromCart: states.removeFromCart
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

//*************************************************************
//* Wrappers para o contexto, de modo que não precise ser chamado
//* useContext(CartContext) diretamente. Mas sim useCartContext()
//* que já faz a verificação de undefined e retorna o contexto
//*************************************************************
export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
