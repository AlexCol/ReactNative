import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthValue } from "../../contexts/AuthContext";
import MainRoutes from "../MainDrawer/MainRoutes";
import SignRoutes from "../SignInStack/SignRoutes";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { token } = useAuthValue();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="Main" component={MainRoutes} />
      ) : (
        <Stack.Screen name="Auth" component={SignRoutes} />
      )}
    </Stack.Navigator>
  );
}

/*
para uma condição entre grupos de rotas, como MainRoutes(Drawer) e SignRoutes(Stack), use o RootNavigator.
Não se pode fazer diretamente com If
ex: 
  token ? <MainRoutes /> : <SignRoutes />
isso gera erro, pois o React Navigation não aceita essa condição diretamente.
Use o RootNavigator para definir a lógica de navegação entre as rotas principais e de autenticação.
Isso permite que o React Navigation gerencie corretamente as transições entre as telas, mantendo a estrutura de navegação.
*/