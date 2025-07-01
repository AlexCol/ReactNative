import React from 'react'
import { MainDrawerParamList } from './_MainDrawerParamList';
import HomeScreenConfig from '../../pages/Home/home.config.screen';
import NewRegisterScreenConfig from '../../pages/NewRegister/newRegister.config.screen';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { drawerOptions } from './util/mainDrawerOptions';
import ProfileScreenConfig from '../../pages/Profile/profile.config.screen';
import CustomDrawer from './CustomDrawer';

function MainRoutes() {
  const mainPagesConfigList = [
    HomeScreenConfig,
    NewRegisterScreenConfig,
    ProfileScreenConfig,
  ];

  const Drawer = createDrawerNavigator<MainDrawerParamList>();
  const callCustomDrawer = (props: DrawerContentComponentProps) => <CustomDrawer {...props} />;

  return (// NavigationContainer está em APP, pois é o container principal da navegação e a Stack tbm pode o usar
    <Drawer.Navigator screenOptions={drawerOptions} drawerContent={callCustomDrawer}>
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

/*
customDrawer: se chamar assim
drawerContent={CustomDrawer}>
alterações feitas em CustomDrawer.tsx não serão refletidas com Hot Reload
então é necessário reiniciar o app para ver as alterações

! para que o hot reload funcione
para que funcione, realizar a chamada ou com um metodo auxiliar
  const callCustomDrawer = (props: DrawerContentComponentProps) => <CustomDrawer {...props} />;
e usado drawerContent={callCustomDrawer}>

ou chamar
  drawerContent={<CustomDrawer {...props} />}

*/