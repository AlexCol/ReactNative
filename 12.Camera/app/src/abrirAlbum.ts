import { Dispatch } from "react";
import { Asset, ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

async function abrirAlbum(setImagemSelecionada: Dispatch<React.SetStateAction<Asset | null>>) {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
    includeBase64: false,
  };

  const response = await launchImageLibrary(options);

  if (response.didCancel) {
    console.log('Usuário cancelou a seleção de imagens');
    return null;
  }
  if (response.errorCode) {
    console.error('Erro ao selecionar imagem:', response.errorMessage);
    return null;
  }

  if (response.assets) {
    setImagemSelecionada(response.assets[0]);
  }
}

export default abrirAlbum;

/*
function abrirAlbum() {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
    includeBase64: false,
  };

  const myCallback = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('Usuário cancelou a seleção de imagens');
      return null;
    }
    if (response.errorCode) {
      console.error('Erro ao selecionar imagem:', response.errorMessage);
      return null;
    }

    if (response.assets) {
      // Aqui você pode manipular a imagem selecionada
      console.log('Imagem selecionada:', response.assets[0]);
    }
  };

  launchImageLibrary(options, myCallback);
}
*/