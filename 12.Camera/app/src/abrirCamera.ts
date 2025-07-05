import { Dispatch } from "react";
import { Asset, CameraOptions, launchCamera } from "react-native-image-picker";
import pedirPermissaoCamera from "./pedirPermissaoCamera";

async function abrirCamera(setImagemSelecionada: Dispatch<React.SetStateAction<Asset | null>>) {
  const permitido = await pedirPermissaoCamera();
  if (!permitido) {
    console.log('Permissão da câmera negada');
    return null;
  }

  const options: CameraOptions = {
    mediaType: 'photo', // Pode ser 'photo' ou 'video'
    quality: 1, // Qualidade da imagem (0 a 1)
    cameraType: 'back', // Pode ser 'front' ou 'back'
    includeBase64: false, // Incluir imagem em base64
    saveToPhotos: true, // Salvar a imagem na galeria    
  }
  const response = await launchCamera(options);

  if (response.didCancel) {
    console.log('Usuário cancelou a captura de imagem');
    return null;
  }

  if (response.errorCode) {
    console.error('Erro ao capturar imagem:', response.errorMessage);
    return null;
  }

  if (response.assets) {
    setImagemSelecionada(response.assets[0]);
  }
}

export default abrirCamera;