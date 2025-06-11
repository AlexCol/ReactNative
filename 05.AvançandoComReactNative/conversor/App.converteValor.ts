import { Dispatch, SetStateAction } from "react";
import { Moeda } from "./src/model/moeda.model";

type converteValorProps = {
  valor: string;
  moedaSelecionada: Moeda;
  setValorConvertido: Dispatch<SetStateAction<string>>
}

export default function converteValor({ valor, moedaSelecionada, setValorConvertido }: converteValorProps) {
  const valorNum = parseFloat(valor);
  if (isNaN(valorNum)) {
    setValorConvertido('valor informado é inválido, tente novamente com outro valor.');
    return;
  }

  const valorMoeda = parseFloat(moedaSelecionada.ask);
  if (isNaN(valorMoeda)) {
    setValorConvertido('- valor valor da moeda é inválido, informar administrador do sistema.');
    return;
  }

  const valorCalculado = valorNum * valorMoeda;
  const valorFormatado = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(valorCalculado);
  setValorConvertido(`R$ ${valorFormatado}`);
}