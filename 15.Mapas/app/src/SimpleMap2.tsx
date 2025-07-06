import React, { useMemo, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps'
import AnimatedMapRegion from 'react-native-maps/src/AnimatedRegion';

export default function SimpleMap2() {
  const samples = useMemo(() => prepareRegionsMap(), []);
  const [region, setRegion] = useState<Region | AnimatedMapRegion>(samples.get('São Paulo')!);

  const changeToSaoPaulo = () => setRegion(samples.get('São Paulo')!);
  const changeToRio = () => setRegion(samples.get('Rio de Janeiro')!);
  const changeToPortoAlegre = () => setRegion(samples.get('Porto Alegre')!);
  const changeToMinhaCasa = () => setRegion(samples.get('Minha Casa')!);

  return (
    <>
      <MapView
        /*localização incial da mapa pegando do celular*/
        style={{ width: '100%', height: '80%' }}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        showsUserLocation={true}
      ></MapView>

      <Text style={{ textAlign: 'center', fontSize: 16 }}>
        {region.latitude.toFixed(4)}, {region.longitude.toFixed(4)}
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
      >
        {MyButton(changeToSaoPaulo, 'São Paulo')}
        {MyButton(changeToRio, 'Rio de Janeiro')}
        {MyButton(changeToPortoAlegre, 'Porto Alegre')}
        {MyButton(changeToMinhaCasa, 'Minha Casa')}
      </View>
    </>
  )
}

function MyButton(onPress: () => void, label: string) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: 'white', backgroundColor: 'blue', fontSize: 16, margin: 5, padding: 2, borderRadius: 5 }}>{label}</Text>
    </TouchableOpacity>
  );
}

function prepareRegionsMap() {
  const samples = new Map<string, Region | AnimatedMapRegion>();
  samples.set('São Paulo', {
    latitude: -23.5505,
    longitude: -46.6333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  samples.set('Rio de Janeiro', {
    latitude: -22.9068,
    longitude: -43.1729,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  samples.set('Porto Alegre', {
    latitude: -30.0346,
    longitude: -51.2177,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  samples.set('Minha Casa', {
    latitude: -27.0970,
    longitude: -52.6277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return samples;
}