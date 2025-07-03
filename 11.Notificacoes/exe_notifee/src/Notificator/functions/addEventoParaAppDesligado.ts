import notifee, { EventType } from '@notifee/react-native';

let registered = false;

export default function addEventoParaAppDesligado() {
  if (registered) return;
  registered = true;

  console.log(`addEventoParaAppDesligado: Registrando evento para app desligado`);

  notifee.onBackgroundEvent(async (event) => {
    switch (event.type) {
      case EventType.DISMISSED:
        console.log(`Notification dismissed - desligado`);
        break;
      case EventType.PRESS:
        console.log(`Notification pressed - desligado`);
        break;
    }
  });
}

/*
  OBS:
  - notifee.onBackgroundEvent registra um único handler global.
  - Não é possível "desregistrar" esse evento depois de setado.
  - Se chamado mais de uma vez, o handler mais recente substitui o anterior.
  - Ou seja, múltiplas chamadas não acumulam handlers, e não causam múltiplas execuções.
  - Por isso, este controle com "registered" evita chamadas desnecessárias.
  - Recomenda-se registrar isso no início da aplicação (ex: index.ts).

  !!O handler de background do Notifee precisa estar no arquivo index.ts (ou index.js) e não dentro do App.tsx porque:
  O código em App.tsx só é executado quando o React está rodando (ou seja, quando o app está aberto ou em foreground).
  Eventos de notificação em background (quando o app está fechado ou em segundo plano) podem ser processados pelo sistema operacional sem nunca montar o React.
  O Notifee (e o próprio React Native) executa o código do arquivo de entrada (index.ts/index.js) para registrar handlers globais, mesmo que o app não esteja totalmente iniciado.
  Se você colocar o handler dentro do App.tsx, ele não será registrado quando o app for iniciado apenas para processar uma notificação em background, e por isso o Notifee exibe um warning.

*/
