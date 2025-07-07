import React, { useState } from 'react'
import { Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap6() {
  const [initialRegion, _] = useState<Region | AnimatedMapRegion>({
    latitude: -27.0970,
    longitude: -52.6277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  type markerType = {
    key: number,
    coord: {
      latitude: number;
      longitude: number;
    };
    pinColor?: string; // opcional, se quiser definir cor do pin
  };
  const [markers, setMarkers] = useState<Array<markerType>>([]);
  const addMarker = (coord: { latitude: number; longitude: number }) => {
    const colors = ['red', 'green', 'blue', 'purple'];
    const newMarker: markerType = {
      key: markers.reduce((max, marker) => Math.max(max, marker.key), -1) + 1, // gera uma chave única
      coord,
      pinColor: colors[markers.length % colors.length]
    };
    setMarkers([...markers, newMarker]);
  };
  const removeMarker = (key: number) => {
    setMarkers(markers.filter(marker => marker.key !== key));
  };

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ padding: 10, backgroundColor: '#f0f0f0' }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          Inicial: {initialRegion.latitude.toFixed(4)}, {initialRegion.longitude.toFixed(4)}
        </Text>
      </View>

      {/*se não usar Markers, o MapView pode ser usado como <MapView /> senão precisa ter tag de abertura e fechamento*/}
      <MapView
        style={{ width: '100%', height: '80%' }}
        region={initialRegion}
        onDoublePress={(e) => addMarker(e.nativeEvent.coordinate)} // adiciona marcador ao clicar no mapa
      >
        {markers.map(marker => (
          <Marker
            key={marker.key}
            coordinate={marker.coord}
            pinColor={marker.pinColor}
            onPress={() => removeMarker(marker.key)} // remove marcador ao clicar nele
          />
        ))}
      </MapView>
    </View>

  )
} 