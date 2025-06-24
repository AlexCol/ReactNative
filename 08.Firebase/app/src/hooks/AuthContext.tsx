import { User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import loadCredentials from "../services/auth/auth.loadCredentials";

type AuthContextType = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    loadCredentials({ user, setUser });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
