import React, { useState } from 'react'
import { Text, View } from 'react-native';
import MapView, { MapPressEvent, Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap3() {
  const [initialRegion, _] = useState<Region | AnimatedMapRegion>({
    latitude: -23.5505,
    longitude: -46.6333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [regionOnChange, setRegionOnChange] = useState<Region | AnimatedMapRegion | undefined>(undefined);
  const [regionOnChangeComplete, setRegionOnChangeComplete] = useState<Region | AnimatedMapRegion | undefined>(undefined);

  const onCLickHandler = (e: MapPressEvent) => {
    console.log('Mapa pressionado', e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
  }

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ padding: 10, backgroundColor: '#f0f0f0' }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          Inicial: {initialRegion.latitude.toFixed(4)}, {initialRegion.longitude.toFixed(4)}
        </Text>
        {regionOnChange && (
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            OnChange: {regionOnChange?.latitude.toFixed(4)}, {regionOnChange?.longitude.toFixed(4)}
          </Text>
        )}
        {regionOnChangeComplete && (
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            OnChangeComplete: {regionOnChangeComplete?.latitude.toFixed(4)}, {regionOnChangeComplete?.longitude.toFixed(4)}
          </Text>
        )}
      </View>

      <MapView
        style={{ width: '100%', height: '80%' }}
        region={initialRegion}
        onRegionChange={(newRegion) => setRegionOnChange(newRegion)}
        onRegionChangeComplete={(newRegion) => setRegionOnChangeComplete(newRegion)}
        onMapReady={() => console.log('Mapa pronto')}
        onPress={onCLickHandler}
      />
    </View>

  )
} 