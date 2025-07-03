import notifee, { AuthorizationStatus } from '@notifee/react-native';

async function pedePermissao(): Promise<AuthorizationStatus> {
  const settings = await notifee.requestPermission();
  console.log('Notification permission settings:', settings.authorizationStatus);
  return settings.authorizationStatus;
}

export default pedePermissao;