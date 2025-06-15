import { StyleSheet, Text, View } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import FontAwesome from '@react-native-vector-icons/fontawesome6';

export default function App() {
  return (
    <View style={styles.container}>
      <Feather
        name="heart"
        size={50}
        color="#4F8EF7"
      />
      <FontAwesome
        name='heart-circle-bolt'
        iconStyle='solid'
        size={50}
        color="#4F8EF7"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
