import notifee from '@notifee/react-native';
import { desativarNotificacaoEmIntervalo, NOTIFICA_INTERVALO_ID } from './notificarEmIntervalo';

export default async function cancelNotificacoesAgendadas() {
  const notificacoes = 'id_da_notificacao_agendada'; //await listNotificacoesAgendadas();
  await notifee.cancelTriggerNotification(notificacoes);
  console.log('Cancelando notificações agendadas:', notificacoes);

  await desativarNotificacaoEmIntervalo(NOTIFICA_INTERVALO_ID); // Desativa notificações agendadas em intervalos
}