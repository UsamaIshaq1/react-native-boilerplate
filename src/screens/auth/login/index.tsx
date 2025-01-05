import React, { useRef, useState } from "react";
import { Image, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { Icons } from "~assets";
import { Button, Input, LargeText, ScreenWrapper, Spacer } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import {
  RootStackNavigationProp,
  RootStackRouteProp,
  ScreenNames,
} from "~routes/routes";
import styles from "./styles";

//For using navigation and route props
type LoginProps = {
  navigation?: RootStackNavigationProp<ScreenNames.LOGIN_SCREEN>;
  route?: RootStackRouteProp<ScreenNames.LOGIN_SCREEN>;
};

export default function LoginScreen({}: LoginProps) {
  //Hooks
  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginHandler = async () => {
    dispatch(
      setUserMeta({
        email,
      })
    );
    dispatch(setIsLoggedIn(true)); // Dispatch action to set login state in Redux store
  };

  return (
    <ScreenWrapper scrollEnabled>
      <View style={styles.mainViewContainer}>
        {/* Logo */}
        <Image source={Icons.logo} style={styles.logo} resizeMode="contain" />
        {/* Heading text */}
        <LargeText textAlign="center" size={4}>
          Sign in to your Account
        </LargeText>
        <Spacer vertical={2} />
        <Input
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          label="Email"
          textInputProps={{
            onSubmitEditing: () => passwordRef.current?.focus(),
            keyboardType: "email-address",
          }}
        />
        <Spacer vertical={2} />
        <Input
          ref={passwordRef}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          label="Password"
          secureTextEntry
        />
        <Spacer vertical={6} />
        <Button onPress={loginHandler}>Login</Button>
      </View>
    </ScreenWrapper>
  );
}
