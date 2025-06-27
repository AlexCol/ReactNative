import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../../model/User";

//*************************************************************
//* Tipagens para o contexto
//*************************************************************
type dispatch = Dispatch<React.SetStateAction<string>>;

export type AuthContextType = {
  id: string;
  setId: dispatch;
  name: string;
  setName: dispatch;
  token: string;
  setToken: dispatch;
};

//*************************************************************
//* Criando o contexto, com base no tipo acima
//*************************************************************
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

//*************************************************************
//* Componente Provider do contexto (onde são iniciadas as variáveis de estado)
//* E então passadas no value para serem usadas pelos componentes filhos
//*************************************************************
export function AuthProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    //loadCredentials({ auth, setAuth });
  }, []);

  const providerValue: AuthContextType = {
    id, setId,
    name, setName,
    token, setToken,
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
