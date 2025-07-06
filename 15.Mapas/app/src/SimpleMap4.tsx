import React, { useState } from 'react'
import { Text, View } from 'react-native';
import MapView, { Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap4() {
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

      <MapView
        style={{ width: '100%', height: '80%' }}
        region={initialRegion}
        //mapType='hybrid' // 'standard', 'satellite', 'hybrid', 'terrain'
        //scrollEnabled={false} //permite arrastar o mapa
        //zoomEnabled={true} //permite dar zoom no mapa
        //rotateEnabled={true} //permite rotacionar o mapa
        showsTraffic={true} //mostra o tráfego //tive que adicionar nos node_modules do react-native-maps (já tem um pull request solicitando a adição)
      />
    </View>

  )
} 