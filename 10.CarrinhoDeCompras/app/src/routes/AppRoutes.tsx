import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StackParamList } from './_StackParamList';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

type stackType = ReturnType<typeof createNativeStackNavigator<StackParamList>>;

function AppRoutes() {
  const Stack: stackType = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F0F4FF',

        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Meu Carrinho' }}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes