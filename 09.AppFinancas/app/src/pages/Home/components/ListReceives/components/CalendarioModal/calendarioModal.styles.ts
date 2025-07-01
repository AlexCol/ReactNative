
const containerTailwindClass = `
  flex-1
  bg-[rgba(34,34,34,0.5)]
`;

const overlayTailwindClass = `
  flex-1
`;

const modalContentTailwindClass = `
  flex-2
  justify-center
  p-4
  rounded-lg
  bg-white
`;

const buttonFilterTailwindClass = `
  rounded-md
  bg-[#3B3DBF]
  h-11
  items-center
  justify-center
`;

const buttonFilterTextTailwindClass = `
  text-white
  text-lg
  font-semibold
`;

export const calendarioModalStyles = {
  container: containerTailwindClass,
  overlay: overlayTailwindClass,
  buttonFilter: buttonFilterTailwindClass,
  buttonFilterText: buttonFilterTextTailwindClass,
  modalContent: modalContentTailwindClass,
}

/*sobre os flex:
container → flex-1
Faz o View ocupar 100% da altura/área disponível dentro do Modal.

overlay → flex-1
Ocupa o máximo de espaço possível dentro do container.

modalContent → flex-2
Ocupa o dobro do espaço comparado ao overlay (2 partes vs 1).
Como os dois estão no mesmo nível dentro do container, isso gera uma distribuição 1/3 (overlay) e 2/3 (modal content) na vertical.

exemplo:
<View style={{ flexDirection: 'column', height: 300 }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'blue' }} />
  <View style={{ flex: 3, backgroundColor: 'green' }} />
</View>

Total de flex: 1 + 2 + 3 = 6
Red: ocupa 1/6 de 300px = 50px
Blue: ocupa 2/6 = 100px
Green: ocupa 3/6 = 150px
*/