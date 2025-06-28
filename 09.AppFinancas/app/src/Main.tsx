import { useAuthValue } from "./contexts/AuthContext";
import SignRoutes from "./routes/SignInStack/SignRoutes";
import MainRoutes from "./routes/MainDrawer/MainRoutes";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

function Main() {
  const { token } = useAuthValue(); //useAuthValue é um wrapper que tem o useContext dentro dele, então não precisa usar o useContext aqui

  const Stack = createNativeStackNavigator();
  const stackOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'fade',
  }

  return (
    <Stack.Navigator screenOptions={stackOptions}>
      {token ? (
        <Stack.Screen name="Main" component={MainRoutes} />
      ) : (
        <Stack.Screen name="Auth" component={SignRoutes} />
      )}
    </Stack.Navigator>
  );
}

export default Main;

/*
depois de quase 2 duas horas surtando, devido a erro do reanimated, 
que não estava funcionando, precia ter haver com a condição de 
renderização de rotas, por isso essa outra abordagem abaixo.

voltei para a acima pois ela voltou a funcionar do nada depois que testei
essa de baixo

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="Main" component={MainRoutes} />
      ) : (
        <Stack.Screen name="Auth" component={SignRoutes} />
      )}
    </Stack.Navigator>

*/

/*
observacao 2:
mudei para o bloco acima, pois a transição de telas é tem um leve efeito
com o comando abaixo, ela é muito seca
e nas screenOptions da Stack.Navigator posso adicionais mais opções de configuração

  return token ? <MainRoutes /> : <SignRoutes />;

*/
