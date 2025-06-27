import api from "../../../services/api";
import { AuthContextType } from "../../../contexts/AuthContext";
import { SignInStates } from "../states";

export default async function handleSignIn(contexto: AuthContextType, states: SignInStates) {
  const email = states.emailRef.current;
  const password = states.passwordRef.current;

  states.setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await api({
    method: "post",
    url: "/login",
    data: { email, password },
  });
  states.setIsLoading(false);

  if (!data) return; //preciso fazer nada, api vai gerar o alerta e console de erro

  contexto.setId(data.id);
  contexto.setName(data.name);
  contexto.setToken(data.token);
  states.emailRef.current = "";
  states.passwordRef.current = "";
  states.emailInputRef.current.clear();
  states.passwordInputRef.current.clear();
}