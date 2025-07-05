import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppStack from './AppStack'

function Navigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default Navigator