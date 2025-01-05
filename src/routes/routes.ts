import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

export enum ScreenNames {
  LOGIN_SCREEN = "LoginScreen",
  HOME_SCREEN = "HomeScreen",
}
export type RootStackParamList = {
  [ScreenNames.LOGIN_SCREEN]: undefined;
  [ScreenNames.HOME_SCREEN]: undefined;
};
// For handling each screen props
// Define the navigation prop type
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

// Define the route prop type
export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
