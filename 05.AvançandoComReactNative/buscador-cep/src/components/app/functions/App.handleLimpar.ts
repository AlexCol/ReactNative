import { TextInput } from "react-native";

type appHandleLimparProps = {
  setCep: (value: string) => void;
  setShowResultado: (value: boolean) => void;
  inputRef?: React.RefObject<TextInput | null>;
};

export default function appHandleLimpar({ setCep, setShowResultado, inputRef }: appHandleLimparProps) {
  setCep('');
  setShowResultado(false);
  if (inputRef && inputRef.current) {
    inputRef.current.clear();
    inputRef.current.focus();
  }
}