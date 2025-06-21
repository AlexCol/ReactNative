import { ComponentType } from "react";
import { RootStackParamList } from "./_RootStackParamList";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

export interface DrawerScreenConfig {
  name: keyof RootStackParamList;
  component: ComponentType<any>;
  options?: DrawerNavigationOptions;
}