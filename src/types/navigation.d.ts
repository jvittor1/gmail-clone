import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { iconNameProps } from "@/components/drawer-button";

export interface CustomOptions extends DrawerNavigationOptions {
  iconName: iconNameProps;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
