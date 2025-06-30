//FlatList - ListReceivesItems
const listTailwindClass = `
  flex-1
  bg-white
`;

//View - ItemList
const containerTailwindClass = `
  bg-white
  rounded
  mx-3
  mb-4
  p-3
`;

//View - ItemList
const tipoTailwindClass = `
  flex-row
`;

//Text - ItemList
const tipoTextTailwindClass = `
  text-white
  text-base
  italic
`;

//View - ItemList
const iconViewTailwindClass = `
  flex-row
  py-1
  px-2
  rounded
  mb-1
  w-2/6
`;

const despesaIconViewTailwindClass = `
  ${iconViewTailwindClass}
  bg-[#c62c36]
`;

const receitaIconViewTailwindClass = `
  ${iconViewTailwindClass}
  bg-[#049301]
`;

//Text - ItemList
const valorTextTailwindClass = `
  text-[#121212]
  text-xl
  font-bold
  pl-2
`;

const emptyTextTailwindClass = `
  text-center
  text-gray-500
  text-lg
  mt-40
  `;

export const listReceivesStyles = {
  list: listTailwindClass,
  container: containerTailwindClass,
  tipo: tipoTailwindClass,
  tipoText: tipoTextTailwindClass,
  receitaIconView: receitaIconViewTailwindClass,
  despesaIconView: despesaIconViewTailwindClass,
  valorText: valorTextTailwindClass,
  emptyText: emptyTextTailwindClass,
};