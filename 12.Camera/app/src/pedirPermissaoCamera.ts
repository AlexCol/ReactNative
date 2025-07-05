import { Platform } from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

async function pedirPermissaoCamera() {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;

  let result = await check(permission);
  if (result !== RESULTS.GRANTED) {
    result = await request(permission);
  }
  return result === RESULTS.GRANTED;
}
export default pedirPermissaoCamera;