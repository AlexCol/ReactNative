import { RefObject, useRef, useState } from "react";
import { TextInput } from "react-native";

export default function useSignInStates() {
  const emailRef = useRef<string>("");
  const emailInputRef = useRef<TextInput>(null) as RefObject<TextInput>;
  const passwordRef = useRef<string>("");
  const passwordInputRef = useRef<TextInput>(null) as RefObject<TextInput>;

  return {
    emailRef, emailInputRef,
    passwordRef, passwordInputRef
  };
}

export type SignInStates = ReturnType<typeof useSignInStates>;