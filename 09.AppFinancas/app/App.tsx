import "./global.css"
import { StatusBar, Text, View } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/Main";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0F4FF" }}>
      {/*SafeAreaView -> para garantir que toda a aplcação fique dentro da area segura (sem ficar por cima da camera ou barra de status do celular)*/}
      <AuthProvider>
        {/*AuthProvider -> para que todos os componentes dentro do AuthProvider tenham acesso ao contexto de autenticação*/}
        <NavigationContainer>
          {/*NavigationContainer -> é o container principal da navegação, que envolve toda a aplicação*/}
          <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" />
          <Main />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

//NavigationContainer fica aqui pois em main podemos usar a Drawer e a Stack, e o
// NavigationContainer é o container principal da navegação

/*
observação: dependendo do aparelho, SafeAreaView pode nem ser necessário. No meu redmi note 11 não faz diferença, pois
pelo que vi o aparelho garante que o aplicativo não fique sobre a barra. Já no emulador ela é útil e necessária.
já backgroundColor de StatusBar tbm depende do aparelho. No meu redmi note 11 muda a cor, já no emulador não faz diferença

SafeAreaView pode ser irrelevante dependendo do aparelho:
Verdade. Em alguns aparelhos (como seu Redmi Note 11), o sistema já aplica margens automáticas para evitar sobreposição com câmera, notch, barra de status etc. Mas emuladores e outros aparelhos podem não fazer isso, então o SafeAreaView ainda é uma proteção útil para garantir consistência visual em todos os dispositivos.

Cor do StatusBar pode ou não funcionar dependendo do aparelho:
Também verdade. A propriedade backgroundColor da StatusBar:

Funciona em Android, mas alguns emuladores ignoram ou têm comportamento inconsistente.

No iOS, essa propriedade não tem efeito direto (é controlada via Info.plist ou tema geral).

Mesmo entre aparelhos Android, o comportamento pode variar conforme a versão e fabricante.
*/