import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AuthContextType = {
  auth: boolean;
  setAuth: (auth: boolean) => void;

};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    //loadCredentials({ auth, setAuth });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthValue must be used within an AuthProvider");
  }
  return context;
}
