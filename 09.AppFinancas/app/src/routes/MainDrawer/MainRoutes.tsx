import React from 'react'
import { MainDrawerParamList } from './_MainDrawerParamList';
import HomeScreenConfig from '../../pages/Home/home.config.screen';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuthValue } from '../../contexts/AuthContext';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { drawerOptions } from './util/mainDrawerOptions';

function MainRoutes() {
  const mainPagesConfigList = [
    HomeScreenConfig
  ];

  const Drawer = createDrawerNavigator<MainDrawerParamList>();

  return (// NavigationContainer está em APP, pois é o container principal da navegação e a Stack tbm pode o usar
    <Drawer.Navigator screenOptions={drawerOptions} drawerContent={CustomDrawer}>
      {mainPagesConfigList.map((ScreenConfig) => (
        <Drawer.Screen
          key={ScreenConfig.name}
          name={ScreenConfig.name as keyof MainDrawerParamList}
          component={ScreenConfig.component}
          options={ScreenConfig.options}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default MainRoutes;

//********************************************************************
// Custom Drawer Component - deixando aqui pois realizar alterações
// com ela aqui, é refletida pelo hot reload. Em um arquivo separado
// o hot reload não identifica que houve alteração.
//********************************************************************
function CustomDrawer(props: DrawerContentComponentProps) {
  const { name, signOut } = useAuthValue();

  return (
    <DrawerContentScrollView>
      <View className="flex items-center justify-center h-24 mt-5 mb-5">
        <Image
          source={require('../../../public/images/Logo.png')}
          style={{ width: 65, height: 65 }}
        />

        <Text style={{ fontSize: 17, color: '#000', marginBottom: 35, }}>
          Bem vindo {name}!
        </Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity className={logOutButtonTailwindClass} onPress={signOut}>
        <Feather name="log-out" size={24} color="#000" />
        <Text style={{ fontSize: 16, color: '#000', marginLeft: 10 }}>Sair</Text>
      </TouchableOpacity>

    </DrawerContentScrollView>
  )
}

const logOutButtonTailwindClass = `
  flex
  p-4
  mt-6
  flex-row
  w-1/3
`;