import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, ScreenWrapper, SmallText, Spacer } from "~components";
import { selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import {
  RootStackNavigationProp,
  RootStackRouteProp,
  ScreenNames,
} from "~routes/routes";
import styles from "./styles";
type HomeProps = {
  navigation?: RootStackNavigationProp<ScreenNames.HOME_SCREEN>;
  route?: RootStackRouteProp<ScreenNames.HOME_SCREEN>;
};
export default function Home({}: HomeProps) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta); // Get user metadata from Redux store

  const handleLogout = () => {
    dispatch(setUserMeta(null));
    dispatch(setIsLoggedIn(false));
  };

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => <Header>Home</Header>}
    >
      <View style={styles.mainViewContainer}>
        <SmallText>Hey {userInfo?.email}</SmallText>
        <Spacer vertical={10} />
        <Button onPress={handleLogout}>Logout</Button>
      </View>
    </ScreenWrapper>
  );
}
