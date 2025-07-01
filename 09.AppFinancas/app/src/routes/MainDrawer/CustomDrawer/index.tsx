import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useAuthValue } from "../../../contexts/AuthContext";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { customDrawerStyles } from "./customDrawer.styles";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { name, signOut } = useAuthValue();

  return (
    <DrawerContentScrollView>
      <View className={customDrawerStyles.mainView}>
        <Image
          source={require('../../../../public/images/Logo.png')}
          style={{ width: 90, height: 90 }}
        />

        <Text className={customDrawerStyles.welcomeText}>
          Bem vindo
        </Text>
        <Text className={customDrawerStyles.nameText} numberOfLines={1}>
          {name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View className={customDrawerStyles.divisionLine}></View>

      <DrawerItem
        label={"Sair"}
        style={{ marginTop: 10 }}
        labelStyle={{ fontSize: 16, color: '#000' }}
        onPress={signOut}
        icon={() => (
          <Feather name="log-out" size={24} color={'#000'} />
        )}
      />

    </DrawerContentScrollView>
  )
}

/*
!primeira forma que fiz o botão de sair
?a que ficou, é como foi visto no cursto, para manter o componente no estilo do drawer (com DrawerItem)
      <TouchableOpacity className={customDrawerStyles.logOutButton} onPress={signOut}>
        <Feather name="log-out" size={24} color="#000" />
        <Text style={{ fontSize: 16, color: '#000', marginLeft: 10 }}>Sair</Text>
      </TouchableOpacity>
*/