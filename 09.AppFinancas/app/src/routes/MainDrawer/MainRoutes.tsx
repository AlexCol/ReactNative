import React from 'react'
import { MainDrawerParamList } from './_MainDrawerParamList';
import HomeScreenConfig from '../../pages/Home/home.config.screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

type drawerType = ReturnType<typeof createDrawerNavigator<MainDrawerParamList>>;

function MainRoutes() {
  const mainPagesConfigList = [
    HomeScreenConfig
  ];

  const Drawer: drawerType = createDrawerNavigator<MainDrawerParamList>();

  return (// NavigationContainer está em APP, pois é o container principal da navegação e a Stack tbm pode o usar
    <Drawer.Navigator>
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