import { DrawerNavigationOptions } from "@react-navigation/drawer";

export const drawerOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  drawerLabelStyle: {
    fontSize: 16,
  },

  drawerActiveBackgroundColor: '#3b3bdf',
  drawerActiveTintColor: '#fff',

  drawerInactiveBackgroundColor: '#f0f2ff',
  drawerInactiveTintColor: '#121212',
}