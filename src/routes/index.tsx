import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "~redux/slices/user";
import { HomeScreen } from "~screens/app";
import { LoginScreen } from "~screens/auth";
import { ScreenNames } from "./routes";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LOGIN_SCREEN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen
            name={ScreenNames.LOGIN_SCREEN}
            component={LoginScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME_SCREEN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
