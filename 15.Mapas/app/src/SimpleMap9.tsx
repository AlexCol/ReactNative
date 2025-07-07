import Geolocation, { GeolocationError, GeolocationOptions, GeolocationResponse } from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { ImageURISource, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps'

export default function SimpleMap9() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(undefined);

  function successCallback(position: GeolocationResponse) {
    const { latitude, longitude } = position.coords;
    setInitialRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
    setIsLoading(false);
  }

  function errorCallback(error: GeolocationError) {
    console.error("Error getting location: ", error);
    // Fallback para São Paulo
    setInitialRegion({
      latitude: -23.5505,
      longitude: -46.6333,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setIsLoading(false);
  }

  const options: GeolocationOptions = {
    enableHighAccuracy: false, // Menos preciso, mas mais rápido
    timeout: 30000, // 30 segundos
    maximumAge: 300000, // 5 minutos de cache
  }

  function setLocation() {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );

  }
  useEffect(() => setLocation(), []);

  if (isLoading) {
    return (
      <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'lightgray', alignItems: 'center' }}>

      <MapView
        style={{ width: '100%', height: '80%' }}
        //region={initialRegion}
        initialRegion={initialRegion}
      //showsUserLocation={true} ///não funciona e não consegui descobrir o porquê nem com as IAs
      //showsMyLocationButton={true}
      />

      <TouchableOpacity style={styles.button} onPress={setLocation}>
        <Text style={styles.buttonText}>Buscar localização</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  buttonText: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
});

type myMarkerType = {
  key: number,
  name?: string; // opcional, se quiser nomear o marcador
  description?: string; // opcional, se quiser descrever o marcador
  coord: {
    latitude: number;
    longitude: number;
  };
  pinColor?: string;
  image?: ImageURISource; // opcional, se quiser usar uma imagem personalizada
};

