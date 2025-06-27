import { RefObject, useRef, useState } from "react";
import { TextInput } from "react-native";

export default function useSignUpStates() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nomeRef = useRef<string>("");
  const nomeRefInput = useRef<TextInput>(null) as RefObject<TextInput>;
  const emailRef = useRef<string>("");
  const emailRefInput = useRef<TextInput>(null) as RefObject<TextInput>;
  const passwordRef = useRef<string>("");
  const passwordRefInput = useRef<TextInput>(null) as RefObject<TextInput>;
  const confirmPasswordRef = useRef<string>("");
  const confirmPasswordRefInput = useRef<TextInput>(null) as RefObject<TextInput>;

  return {
    isLoading, setIsLoading,
    nomeRef, nomeRefInput,
    emailRef, emailRefInput,
    passwordRef, passwordRefInput,
    confirmPasswordRef, confirmPasswordRefInput
  };
}

export type SignUpStates = ReturnType<typeof useSignUpStates>;