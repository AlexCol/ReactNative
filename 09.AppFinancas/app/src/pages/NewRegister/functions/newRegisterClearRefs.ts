import { NewRegisterStates } from "../newRegister.states";

export function newRegisterClearRefs(states: NewRegisterStates) {
  states.setDescricao('');
  states.setValor('');
}