import { useState } from "react";
import { CartProduct } from "../types/CartProduct";
import { Product } from "../model/Product";

export default function useCartContexStates() {
  const [selectedProducts, setSelectedProducts] = useState<Map<string, CartProduct>>(new Map());
  const selectedProductsAsArray = Array.from(selectedProducts.entries()).map(([_, produto]) => produto);

  const addToCart = (product: Product) => {
    setSelectedProducts(prev => {
      const newMap = new Map(prev);
      if (!newMap.has(product.id)) {
        newMap.set(product.id, { product, quantity: 1 });
      } else {
        const mappedProduct = newMap.get(product.id)!;
        newMap.set(product.id, { ...mappedProduct, quantity: mappedProduct.quantity + 1 });
      }
      return newMap;
    });
  }

  const removeFromCart = (product: Product) => {
    setSelectedProducts(prev => {
      const newMap = new Map(prev);
      const mappedProduct = newMap.get(product.id);
      if (!mappedProduct) return newMap;
      if (mappedProduct.quantity === 1) {
        newMap.delete(product.id);
      } else {
        newMap.set(product.id, { ...mappedProduct, quantity: mappedProduct.quantity - 1 });
      }
      return newMap;
    });
  };

  return {
    selectedProducts, setSelectedProducts,
    selectedProductsAsArray,
    addToCart, removeFromCart,
  }
}

export type CartContextStates = ReturnType<typeof useCartContexStates>;