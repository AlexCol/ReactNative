
const backgroundTailwindClass = `
  flex-1
  bg-background
`;

const formTailwindClass = `
  mt-4
  items-center
`;

const inputTailwindClass = `
  h-12
  w-90%
  bg-white
  text-lg
  px-2
  mb-4
  rounded-lg
`;

const tpLancamentoContainerTailwindClass = `
  flex-row
  w-full
  px-[5%]
  justify-between
  items-center
  
`;

const tpLancamentoTypeButtonTailwindClass = `
  w-[47%]
  justify-center
  items-center
  flex-row
  h-14
  rounded
  mb-4
`;

const selectedTpLancamentoTypeButtonTailwindClass = `
  ${tpLancamentoTypeButtonTailwindClass}
  border
  bg-[#E7E7E7]
  border-[#3B3DBF]
`;

const inactiveTpLancamentoTypeButtonTailwindClass = `
  ${tpLancamentoTypeButtonTailwindClass}
  bg-[#FFF]
`;

const tpLancamentoLabelTailwindClass = `
  ml-2
  text-xl
`;

const submitButtonTailwindClass = `
  w-90%
  h-12
  items-center
  justify-center
  bg-[#00b94a]
  rounded-lg
`;

const submitButtonTextTailwindClass = `
  text-white
  text-xl
  font-bold
`;

export const newRegisterStyles = {
  background: backgroundTailwindClass,
  form: formTailwindClass,
  input: inputTailwindClass,
  tpLancamentoContainer: tpLancamentoContainerTailwindClass,
  selectedTpLancamentoTypeButton: selectedTpLancamentoTypeButtonTailwindClass,
  inactiveTpLancamentoTypeButton: inactiveTpLancamentoTypeButtonTailwindClass,
  tpLancamentoLabel: tpLancamentoLabelTailwindClass,
  submitButton: submitButtonTailwindClass,
  submitButtonText: submitButtonTextTailwindClass,
};
