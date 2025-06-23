import React from "react";

type clearRefsType = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setIdade: React.Dispatch<React.SetStateAction<string>>;
  setCargo: React.Dispatch<React.SetStateAction<string>>;
}

export function clearRefs(states: clearRefsType) {
  states.setId('');
  states.setNome('');
  states.setIdade('');
  states.setCargo('');
}