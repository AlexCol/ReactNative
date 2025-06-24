//!! ideia para declaração de useStates em um arquivo separado

import { User } from "firebase/auth";
import { useState } from "react";
import { useAuthValue } from "../../hooks/AuthContext";

export default function authUseForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuthValue();

  return {
    email, setEmail,
    password, setPassword,
    authUser: user, setAuthUser: setUser
  };
}

export type AuthUseFormType = ReturnType<typeof authUseForm>;