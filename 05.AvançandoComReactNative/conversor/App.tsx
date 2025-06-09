import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PickerItem from './src/components/PickerItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(16, 18, 21)',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 0,
    marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 0,
    paddingTop: 40,
    alignItems: 'center'
  },
  areaMoeda: {
    backgroundColor: 'rgb(249, 249, 249)',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8
  },
  titulo: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
    fontWeight: 500,
    paddingLeft: 5,
    paddingTop: 5,
  }
});
