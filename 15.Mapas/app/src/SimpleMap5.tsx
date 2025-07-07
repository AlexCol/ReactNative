import React, { useState } from 'react'
import { Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap5() {
  const [initialRegion, _] = useState<Region | AnimatedMapRegion>({
    latitude: -27.0970,
    longitude: -52.6277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
      >
        <Marker
          coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
          title="Meu Marker"
          description="Descrição do Marker"
          pinColor='purple'
        />
        <Marker
          coordinate={{ latitude: initialRegion.latitude + 0.011, longitude: initialRegion.longitude + 0.011 }}
          title="Meu Marker2"
          description="Descrição do Marker2"
          pinColor='blue'
        />
      </MapView>
    </View>

  )
} 