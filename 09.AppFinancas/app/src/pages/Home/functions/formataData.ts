import dayjs from "dayjs";
import { BACKEND_DATE_FORMAT } from "../../../util/constantes";

export function formatDate(date: Date): string {
  const formatedDate = date.valueOf() - date.getTimezoneOffset() * 60 * 1000; // Ajusta a data para o fuso horário local
  const stringDate = dayjs(formatedDate).format(BACKEND_DATE_FORMAT); // Formata a data para o formato DD/MM/YYYY
  return stringDate;
}