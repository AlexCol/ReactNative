// eventos.ts
import notifee, { EventType } from '@notifee/react-native';

let unsubscribeAppLigado: (() => void) | null = null;

export function addEventoParaAppLigado() {
  if (unsubscribeAppLigado) return;

  unsubscribeAppLigado = notifee.onForegroundEvent(async ({ type, detail }) => {
    const channelId = detail.notification?.android?.pressAction?.id ?? 'sem channel';
    switch (type) {
      case EventType.DISMISSED:
        console.log(`Notification dismissed - ligado, Channel ID: ${channelId}`);
        break;
      case EventType.PRESS:
        console.log(`Notification pressed - ligado, Channel ID: ${channelId}`);
        break;
    }
  });
}

export function removeEventoParaAppLigado() {
  if (unsubscribeAppLigado) {
    unsubscribeAppLigado(); // cancela o listener
    unsubscribeAppLigado = null;
  }
}

/*
  OBS:
  - notifee.onForegroundEvent registra um listener para eventos enquanto o app está em primeiro plano.
  - Esse listener retorna uma função que permite cancelar a inscrição (unsubscribe).
  - Se registrar múltiplas vezes sem cancelar, os handlers se acumulam e serão todos executados.
  - Aqui usamos uma variável de controle (unsubscribeAppLigado) para garantir que o evento só seja registrado uma vez.
  - A função removeEventoParaAppLigado cancela o listener e limpa a referência, permitindo novo registro se necessário.
  - Ideal para controle centralizado de listeners em módulos singleton.
*/
