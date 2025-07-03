import notifee, { AndroidImportance } from '@notifee/react-native';

export default async function listNotificacoesAgendadas() {
  const notificacoes = await notifee.getTriggerNotificationIds();
  console.log('Notificações agendadas:', notificacoes);
  return notificacoes;
}