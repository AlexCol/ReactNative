import { registerRootComponent } from 'expo';

import App from './App';
import addEventoParaAppDesligado from './src/Notificator/functions/addEventoParaAppDesligado';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

addEventoParaAppDesligado(); //mais informações no arquivo addEventoParaAppDesligado.ts    
registerRootComponent(App);
