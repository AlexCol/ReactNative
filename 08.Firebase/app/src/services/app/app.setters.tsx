//!! ideia para declaração de useStates em um arquivo separado

import { useState } from "react";
import IUser from "../../model/IUser";

export default function appUseForm() {
  const [id, setId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);

  return {
    id, setId,
    loading, setLoading,
    user, setUser,
    nome, setNome,
    idade, setIdade,
    cargo, setCargo,
    showForm, setShowForm,
    users, setUsers
  };
}

export type AppUseFormType = ReturnType<typeof appUseForm>;