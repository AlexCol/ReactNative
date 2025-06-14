import { Keyboard } from "react-native";
import { ViaCepResponse } from "../../../Model/ViaCepResponse";
import api from "../../../Services/api";

type appHandleBuscarProps = {
  cep: string;
  setLoading: (loading: boolean) => void;
  setEndereco: (endereco: ViaCepResponse | null) => void;
  setShowResultado: (show: boolean) => void;
};

export default async function appHandleBuscar({ cep, setLoading, setEndereco, setShowResultado }: appHandleBuscarProps) {
  const cepValido = cep.replace(/\D/g, ''); // Remove tudo que não é dígito
  if (cepValido.length !== 8) {
    alert('CEP inválido! Deve conter 8 dígitos.');
    return;
  }

  setLoading(true);
  try {
    const result = await api.get<ViaCepResponse>(`/${cep}/json/`);
    setEndereco(result.data);
    setShowResultado(true);
    Keyboard.dismiss(); // Fecha o teclado após buscar o CEP
  }
  catch (error) {
    console.error('Erro ao buscar CEP:', error);
    alert('Erro ao buscar CEP. Verifique o CEP informado e tente novamente.');
    setEndereco(null);
    setShowResultado(false);
  }
  finally {
    setLoading(false);
  }

}