import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerNavigatorProps } from "@react-navigation/drawer"
import { Image, Text, View } from "react-native"

function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView>
      <View style={{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
        <Image
          source={require('../assets/perfil.png')}
          style={{ width: 65, height: 65 }}
        />

        <Text style={{ fontSize: 17, color: '#fff', marginBottom: 35 }}>
          Bem vindo!
        </Text>

      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer