import { ComponentType } from "react";
import { RootStackParamList } from "./_RootStackParamList";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export interface TabScreenConfig {
  name: keyof RootStackParamList;
  component: ComponentType<any>;
  options?: BottomTabNavigationOptions;
}