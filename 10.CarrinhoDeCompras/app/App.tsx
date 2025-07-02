import { StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext, CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
