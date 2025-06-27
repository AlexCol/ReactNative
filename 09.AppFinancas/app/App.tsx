import "./global.css"
import { StatusBar, Text, View } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/routes/RootNavigator/RootNavigator";
import Main from "./src/Main";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" />
        <Main />
      </NavigationContainer>
    </AuthProvider>
  );
}

//NavigationContainer fica aqui pois em main podemos usar a Drawer e a Stack, e o 
// NavigationContainer é o container principal da navegação