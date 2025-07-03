import notifee, { Notification, TimestampTrigger, TriggerType, AndroidImportance, RepeatFrequency } from '@notifee/react-native';

export const NOTIFICA_INTERVALO_ID = 'notifica_em_intervalo';

export default async function notificarEmIntervalo() {

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'id_do_channel',
    name: 'name_do_channel', //essas informações podem ser vistas nas configurações do app no aparelho
    importance: AndroidImportance.HIGH,
    vibration: true,
  });

  const notification: Notification = {
    id: NOTIFICA_INTERVALO_ID,
    title: 'Notificação em Intervalo',
    body: 'Esta é uma notificação que será exibida em intervalos regulares.',
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'interval_id',
        launchActivity: 'default', // garante que o app será aberto ao tocar
      },
    },
  };

  // Agendar a notificação para ser exibida a cada 5 segundos
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: Date.now() + 5000, // 5 segundos a partir de agora
    repeatFrequency: RepeatFrequency.HOURLY, // pode ser ajustado para DIARIO, SEMANAL, MENSAL, ANUAL
  };

  await notifee.createTriggerNotification(notification, trigger);
}

export async function desativarNotificacaoEmIntervalo(notificacaoId: string) {
  if (notificacaoId === NOTIFICA_INTERVALO_ID) {
    await notifee.cancelTriggerNotification(NOTIFICA_INTERVALO_ID);
  }
}