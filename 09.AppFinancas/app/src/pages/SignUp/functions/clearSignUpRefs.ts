import { SignUpStates } from "../states";

export default function clearSignUpRefs(signUpStates: SignUpStates) {
  signUpStates.nomeRef.current = '';
  signUpStates.emailRef.current = '';
  signUpStates.passwordRef.current = '';
  signUpStates.confirmPasswordRef.current = '';
  signUpStates.nomeRefInput.current.clear();
  signUpStates.emailRefInput.current.clear();
  signUpStates.passwordRefInput.current.clear();
  signUpStates.confirmPasswordRefInput.current.clear();
}