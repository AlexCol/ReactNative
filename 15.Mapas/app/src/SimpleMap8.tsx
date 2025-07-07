import React, { useState } from 'react'
import { ImageURISource, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap8() {
  const carro = require('../public/images/carro.png');
  const carro_down = require('../public/images/carro_down.png');

  const [initialRegion, _] = useState<Region | AnimatedMapRegion>({
    latitude: -27.0970,
    longitude: -52.6277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markers, setMarkers] = useState<Array<myMarkerType>>([
    {
      key: 1,
      name: 'Meu Marker',
      description: 'Descrição do Marker',
      coord: { latitude: initialRegion.latitude, longitude: initialRegion.longitude },
      pinColor: 'purple',
    },
    {
      key: 2,
      name: 'Meu Marker2',
      description: 'Descrição do Marker2',
      coord: { latitude: initialRegion.latitude + 0.011, longitude: initialRegion.longitude + 0.011 },
      pinColor: 'blue',
    }
  ]);

  return (
    <View style={{ height: '100%', width: '100%' }}>

      {/*se não usar Markers, o MapView pode ser usado como <MapView /> senão precisa ter tag de abertura e fechamento*/}
      <MapView
        style={{ width: '100%', height: '90%' }}
        region={initialRegion}
      >
        {markers.map(marker => (
          <Marker key={marker.key} coordinate={marker.coord} title={marker.name} description={marker.description}>
            {myPin(marker)}
          </Marker>
        ))}
      </MapView>
    </View>

  )
}

const styles = StyleSheet.create({
  viewMarker: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: '#000',
  },
  textMarker: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
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

function myPin(marker: myMarkerType) {
  return (
    <View style={[styles.viewMarker, { backgroundColor: marker.pinColor || 'rgba(255, 255, 255, 0.8)' }]}>
      <Text style={styles.textMarker}>{marker.name}</Text>
    </View>
  );
}
