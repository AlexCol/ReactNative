import { Button, Text, View } from "react-native"
import { useAuthValue } from "../../contexts/AuthContext"

function SignIn() {
  const { setAuth } = useAuthValue();
  return (
    <View>
      <Text>Sign In</Text>
    </View>
  )
}

export default SignIn