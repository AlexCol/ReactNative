export default function maskCep(value: string) {
  // Remove tudo que não é número
  value = value.replace(/\D/g, '');
  // Aplica a máscara
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
  }
  return value;
}