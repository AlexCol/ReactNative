import { Product } from "../model/Product";

export class Api {
  static async getProducts() {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simula um atraso de 500ms
    const products: Product[] = [
      { id: "1", name: 'Coca-Cola', price: 19.90 },
      { id: "2", name: 'Chocolate', price: 6.50 },
      { id: "3", name: 'Queijo 500g', price: 15 },
      { id: "5", name: 'Presunto 500g', price: 11 },
      { id: "6", name: 'Batata frita', price: 31.39 },
      { id: "7", name: 'Guaraná', price: 6 },
      { id: "8", name: 'Pão de forma', price: 4.99 },
      { id: "9", name: 'Maçã', price: 2.50 },
      { id: "10", name: 'Banana', price: 1.20 },
      { id: "11", name: 'Laranja', price: 3.00 },
      { id: "12", name: 'Uva', price: 5.00 },
    ]
    return products
  }
}