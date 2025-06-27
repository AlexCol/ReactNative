import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../../model/User";
import api from "../services/api";

//*************************************************************
//* Tipagens para o contexto
//*************************************************************
export type AuthContextType = {
  id: string;
  name: string;
  token: string;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
};

//*************************************************************
//* Criando o contexto, com base no tipo acima
//*************************************************************
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

//*************************************************************
//* Componente Provider do contexto (onde são iniciadas as 
//* variáveis de estado e as funções que serão passadas no value)
//* E então passadas no value para serem usadas pelos componentes filhos
//*************************************************************
export function AuthProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await api({
      method: "post",
      url: "/login",
      data: { email, password },
    });
    setIsLoading(false);

    if (!data) return; //preciso fazer nada, api vai gerar o alerta e console de erro

    setId(data.id);
    setName(data.name);
    setToken(data.token);
  };

  const providerValue: AuthContextType = {
    id,
    name,
    token,
    isLoading,
    signIn
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

//*************************************************************
//* Wrappers para o contexto, de modo que não precise ser chamado
//* useContext(AuthContext) diretamente. Mas sim useAuthValue()
//* que já faz a verificação de undefined e retorna o contexto
//*************************************************************
export function useAuthValue() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthValue must be used within an AuthProvider");
  }
  return context;
}
