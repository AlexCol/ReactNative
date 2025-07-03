import notifee, { Notification, TimestampTrigger, TriggerType, AndroidImportance } from '@notifee/react-native';

export default async function notificarAgendado() {
  const date = new Date();
  const secondsToAdd = date.getSeconds() + 10;
  date.setSeconds(secondsToAdd);

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'id_channel_agendado',
    name: 'name_do_channel_agendado',  //essas informações podem ser vistas nas configurações do app no aparelho
    importance: AndroidImportance.HIGH,
    vibration: true,
  });

  const notification: Notification = {
    id: 'id_da_notificacao_agendada', //se deixar em branco, o notifee gera um id automaticamente
    title: 'Lembrete_agendado',
    body: 'Esta é uma notificação agendada para daqui a 10 segundos.',
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      smallIcon: 'ic_launcher', // Ícone pequeno da notificação
      pressAction: {
        id: 'agenda_id',
        launchActivity: 'default', // garante que o app será aberto ao tocar
      },
    },
  };

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(notification, trigger);
}