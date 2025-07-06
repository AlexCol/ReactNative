import { Dispatch, SetStateAction } from "react";
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

async function pedePermissao(setPermitido: Dispatch<SetStateAction<boolean>>) {
  /*
  precisa ter 
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  no manifest do Android
  */

  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  let result = await check(permission);
  console.log('Permissao: resultado inicial =>', result);

  if (result !== RESULTS.GRANTED) {
    console.log('Solicitando permissão...');
    result = await request(permission);
    console.log('Permissao: resultado após solicitar =>', result);
  }

  setPermitido(result === RESULTS.GRANTED);
}

export default pedePermissao;