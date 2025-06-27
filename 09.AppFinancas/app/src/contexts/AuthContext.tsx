import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type User = {
  auth: boolean;
  id: string;
  name: string;
  email: string;
}

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ auth: false } as User);

  useEffect(() => {
    //loadCredentials({ auth, setAuth });
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
