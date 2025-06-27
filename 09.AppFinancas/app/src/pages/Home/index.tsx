import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthValue } from '../../contexts/AuthContext'

function Home() {
  const { signOut } = useAuthValue();
  return (
    <View className="flex-1 items-center justify-center bg-gray-500">
      <Text className="text-xl font-bold text-red-500">
        Welcome back!
      </Text>
      <TouchableOpacity className="bg-red-500 p-4 rounded" onPress={signOut}>
        <Text className="text-lg font-bold text-white mt-4">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;