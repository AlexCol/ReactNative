import notifee, { AndroidImportance, AuthorizationStatus } from '@notifee/react-native';

export default async function notificar(statusNotification: AuthorizationStatus | null) {
  if (statusNotification === null) {
    console.warn('Status de notificação não definido');
    return;
  }

  if (statusNotification < AuthorizationStatus.AUTHORIZED) {
    console.warn('Notificação não autorizada');
    return;
  }

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'id_do_channel',
    name: 'name_do_channel', //essas informações podem ser vistas nas configurações do app no aparelho
    importance: AndroidImportance.HIGH,
    vibration: true,
  });

  // Display a notification
  await notifee.displayNotification({
    id: 'id_da_notificacao', //se deixar em branco, o notifee gera um id automaticamente
    title: 'Titulo da Notificação',
    body: 'Conteúdo principal da notificação',
    android: { //dados para funcionar no Android (para iOS, use o campo 'ios')
      channelId: channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'custom_id',
        launchActivity: 'default', // garante que o app será aberto ao tocar
      }
    },
  });
}