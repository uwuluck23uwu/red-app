import { menuItemModel } from "../interfaces";

export type RootStackParamList = {
  HOME: { screen?: string };
  HomeScreen: undefined;
  MenuItemDetailScreen: { id: number };
  ShoppingCartScreen: undefined;
  ProfileScreen: undefined;
  Login: undefined;
  Register: undefined;
};
