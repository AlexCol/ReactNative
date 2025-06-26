import { Text, TouchableOpacity, View } from "react-native"

function MeuComponente() {
  return (
    <View className="grid grid-cols-3 bg-blue-50 p-1">
      <View className="bg-blue-200"><Text>1</Text></View>
      <View className="bg-red-200"><Text>2</Text></View>
      <View className="bg-blue-300"><Text>3</Text></View>
      <View className="bg-red-300"><Text>4</Text></View>
      <View className="bg-blue-400"><Text>5</Text></View>
      <View className="bg-red-400"><Text>6</Text></View>
      <View className="bg-blue-500"><Text>7</Text></View>
      <View className="bg-red-500"><Text>8</Text></View>
      <View className="bg-blue-600"><Text>9</Text></View>
    </View>
  )
}

export default MeuComponente