import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import MyScrollView from './components/MyScrollView';
import MyFlatList from './components/MyFlatList';

export default function App() {
  return (
    <View>
      {/* <MyScrollView /> */}
      <MyFlatList />
    </View>
  );
}

