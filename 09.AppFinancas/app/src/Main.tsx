import { StatusBar, Text, View } from "react-native"
import { AuthContext, useAuthValue } from "./contexts/AuthContext";
import SignRoutes from "./routes/SignInStack/SignRoutes";

function Main() {
  const { auth } = useAuthValue();
  return (
    <>
      {
        auth
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