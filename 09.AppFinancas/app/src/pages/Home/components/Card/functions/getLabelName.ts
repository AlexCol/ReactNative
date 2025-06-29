
export function getLabelName(tag: string) {
  const blueTailwindClass = 'bg-blue-700';
  const greenTailwindClass = 'bg-green-700';
  const redTailwindClass = 'bg-red-700';

  if (tag === 'saldo') {
    return { label: 'Saldo atual', color: blueTailwindClass };
  }
  if (tag === 'receita') {
    return { label: 'Entradas de hoje', color: greenTailwindClass };
  }
  if (tag === 'despesa') {
    return { label: 'Saídas de hoje', color: redTailwindClass };
  }

  return null;
}
