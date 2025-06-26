import "./global.css"
import { Text, View } from "react-native";
import MeuComponente from "./src/MeuComponente";

export default function App() {
  return (
    <View className="flex-1 bg-white mt-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <MeuComponente />
    </View>
  );
}