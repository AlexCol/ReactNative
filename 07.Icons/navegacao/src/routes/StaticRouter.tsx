import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { createStaticNavigation } from '@react-navigation/native';

const MyStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Tela Inicial',
        headerStyle: {
          backgroundColor: '#6200ee', // cor do header
        },
        headerTintColor: '#fff', // cor da fonte do header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: true, // exibe o header
      }
    },
    Sobre: {
      screen: Sobre,
      options: {
        title: 'Tela Sobre',
        headerStyle: {
          backgroundColor: '#ee0062',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
  },
});
const Navigation = createStaticNavigation(MyStack);

function StaticRouter() {
  return (
    <Navigation />
  )
}

export default StaticRouter;