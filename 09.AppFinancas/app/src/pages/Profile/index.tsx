
import { Text, TouchableOpacity, View } from 'react-native'
import { profileStyles } from './profile.styles'
import Header from '../../components/Header'
import { useProfileStates } from './profile.states';

function Profile() {
  const states = useProfileStates();

  return (
    <View className={profileStyles.container}>
      <Header title="Meu Perfil" />

      <Text className={profileStyles.message}>Hey, bem-vindo de volta!</Text>

      <Text className={profileStyles.name} numberOfLines={1}>
        {states.name}
      </Text>

      <TouchableOpacity className={profileStyles.newLink} onPress={states.navigateToRegister}>
        <Text className={profileStyles.newText}>Fazer Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity className={profileStyles.logountButton} onPress={states.signOut}>
        <Text className={profileStyles.logountText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile