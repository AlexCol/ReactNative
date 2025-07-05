import { StyleSheet, View } from 'react-native';
import { JSX } from 'react';
import Navigator from './src/routes/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
function StackNavigator(arg0: { Home: { screen: () => JSX.Element; }; Cadastro: { screen: () => JSX.Element; }; Login: { screen: () => JSX.Element; }; }) {
  throw new Error('Function not implemented.');
}

