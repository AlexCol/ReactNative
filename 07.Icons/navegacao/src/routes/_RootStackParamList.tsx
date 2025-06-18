// Defina os tipos dos parâmetros das suas rotas
export type RootStackParamList = {
  Home: undefined; // Home não recebe parâmetros
  Sobre: { // Sobre recebe parâmetros opcionais
    nome?: string;
    idade?: number;
    cidade?: string;
  };
  Contatos: undefined; // Contato não recebe parâmetros
};