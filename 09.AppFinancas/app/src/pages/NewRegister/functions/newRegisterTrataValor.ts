export function newRegisterTrataValor(valor: string) {
  // Remove todos os caracteres que não são dígitos ou ponto
  const valorTratado = valor.replace(/[^0-9.]/g, '');

  // Verifica se o valor contém mais de um ponto
  const partes = valorTratado.split('.');
  if (partes.length > 2) {
    return partes[0] + '.' + partes.slice(1).join('');
  }

  // Retorna o valor tratado
  return valorTratado;

}