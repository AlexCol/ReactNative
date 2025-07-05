import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Asset } from 'react-native-image-picker';
import abrirAlbum from './src/abrirAlbum';
import abrirCamera from './src/abrirCamera';
import { useState } from 'react';

export default function App() {
  const [imagemSelecionada, setImagemSelecionada] = useState<Asset | null>(null);
  const handleAlbum = async () => await abrirAlbum(setImagemSelecionada);
  const handleCamera = async () => await abrirCamera(setImagemSelecionada);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={handleAlbum}>
          <Text style={styles.buttonText}>Abrir album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCamera}>
          <Text style={styles.buttonText}>Abrir camera</Text>
        </TouchableOpacity>
      </View>

      {imagemSelecionada && (
        <Image
          source={{ uri: imagemSelecionada.uri }}
          style={styles.image}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
  buttonArea: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', padding: 20, },
  button: { padding: 20, backgroundColor: '#ccc', borderRadius: 10, },
  buttonText: { fontSize: 18, color: '#000', },
  image: { width: '90%', height: 300, resizeMode: 'contain', marginTop: 20, objectFit: 'cover' }
});
