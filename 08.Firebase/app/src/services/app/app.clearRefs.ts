import React from "react";

type clearRefsType = {
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setIdade: React.Dispatch<React.SetStateAction<string>>;
  setCargo: React.Dispatch<React.SetStateAction<string>>;
}

export function clearRefs(states: clearRefsType) {
  states.setNome('');
  states.setIdade('');
  states.setCargo('');
}