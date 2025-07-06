import React from 'react'
import MapView from 'react-native-maps'

export default function SimpleMap() {
  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      /*localização incial da mapa pegando do celular*/
      initialRegion={{
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}