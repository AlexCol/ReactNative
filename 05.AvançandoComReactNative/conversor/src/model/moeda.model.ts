
export interface Moeda {
  code: string;        // Código da moeda (ex: "USD")
  codein: string;     // Código da moeda de referência (ex: "BRL")
  name: string;       // Nome da moeda (ex: "Dólar Americano/Real Brasileiro")
  high: string;       // Valor mais alto da moeda (ex: "5.5706")
  low: string;        // Valor mais baixo da moeda (ex: "5.53055")
  varBid: string;     // Variação do valor da moeda (ex: "0.00549")
  pctChange: string;  // Percentual de mudança (ex: "0.098928")
  bid: string;        // Valor de compra (ex: "5.5552")
  ask: string;        // Valor de venda (ex: "5.5582")
  timestamp: string;  // Timestamp da cotação (ex: "1749569141")
  create_date: string; // Data de criação da cotação (ex: "2025-06-10 12:25:41")
}