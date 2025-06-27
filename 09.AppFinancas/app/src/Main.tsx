import { StatusBar, Text, View } from "react-native"
import { AuthContext, useAuthValue } from "./contexts/AuthContext";
import SignRoutes from "./routes/SignInStack/SignRoutes";

function Main() {
  const { user } = useAuthValue(); //useAuthValue é um wrapper que tem o useContext dentro dele, então não precisa usar o useContext aqui
  return (
    <>
      {
        user?.auth
          ? //rotas drawer
          <View className="flex-1 items-center justify-center bg-gray-500">
            <Text className="text-xl font-bold text-red-500">
              Welcome back!
            </Text>
          </View>
          : //rotas stack
          <SignRoutes />

      }

    </>
  )
}

export default Main;