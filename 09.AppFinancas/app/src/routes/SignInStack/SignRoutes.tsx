import React from 'react'
import { SignInStackParamList } from './_SignInStackParamList';
import SignInConfigStack from '../../pages/SignIn/signIn.config.stack';
import SignUpConfigStack from '../../pages/SignUp/signUp.config.stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type stackType = ReturnType<typeof createNativeStackNavigator<SignInStackParamList>>;

function SignRoutes() {
  const signPagesList = [SignInConfigStack, SignUpConfigStack];
  const Stack: stackType = createNativeStackNavigator<SignInStackParamList>();

  return (// NavigationContainer está em APP, pois é o container principal da navegação e a Drawer tbm pode o usar
    <Stack.Navigator>
      {signPagesList.map((ScreenConfig) => (
        <Stack.Screen
          key={ScreenConfig.name}
          name={ScreenConfig.name as keyof SignInStackParamList}
          component={ScreenConfig.component}
          options={ScreenConfig.options}
        />
      ))}
    </Stack.Navigator>
  )
}

export default SignRoutes