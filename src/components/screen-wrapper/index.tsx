import React from "react";
import {
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  View,
  ScrollViewProps,
  ImageResizeMode,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useIsFocused } from "@react-navigation/native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { AppColors } from "~utils";
import styles from "./styles";
import { height } from "~utils/dimensions";

interface ScreenWrapperProps {
  children: React.ReactNode;
  statusBarColor?: string;
  translucent?: boolean;
  scrollEnabled?: boolean;
  backgroundImage?: any;
  backgroundImageStyle?: object;
  backgroundColor?: string;
  headerUnScrollable?: () => JSX.Element | null;
  footerUnScrollable?: () => JSX.Element | null;
  barStyle?: "default" | "light-content" | "dark-content";
  onScroll?: ScrollViewProps["onScroll"];
  isRefreshing?: boolean;
  resizeMode?: ImageResizeMode;
  enablePullToRefresh?: boolean;
  onRefresh?: () => void;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  statusBarColor = AppColors.primary,
  translucent = false,
  scrollEnabled = false,
  backgroundImage = null,
  backgroundImageStyle = {},
  backgroundColor = AppColors.white,
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  barStyle = "light-content",
  onScroll = () => null,
  isRefreshing = false,
  resizeMode = "cover",
  enablePullToRefresh = false,
  onRefresh = () => null,
}) => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  // FocusAwareStatusBar handles status bar changes when the screen is focused
  const FocusAwareStatusBar: React.FC<{
    barStyle: "default" | "light-content" | "dark-content";
    backgroundColor: string;
    translucent: boolean;
  }> = (props) => {
    if (isFocused) {
      return <StatusBar {...props} />;
    }
    return null;
  };

  // Content rendering
  const content = () => (
    <View
      style={[
        styles.contentContainer,
        {
          backgroundColor: backgroundImage
            ? "transparent"
            : statusBarColor
            ? statusBarColor
            : backgroundColor,
          paddingTop:
            (translucent || statusBarColor) && Platform.OS == "ios"
              ? 0
              : insets.top,
        },
      ]}
    >
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={translucent}
      />

      <SafeAreaView
        style={[
          styles.safeArea,
          {
            backgroundColor: statusBarColor,
            paddingTop: statusBarColor ? 0 : insets.top,
          },
        ]}
      />

      {headerUnScrollable()}

      {scrollEnabled ? (
        <KeyboardAwareScrollView
          refreshControl={
            enablePullToRefresh ? (
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            ) : undefined
          }
          onScroll={onScroll}
          style={[!backgroundImage && { backgroundColor }]}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll
          scrollEnabled
          contentContainerStyle={{ flexGrow: 1 }}
          extraScrollHeight={height(2)}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View
          style={[
            styles.contentContainer,
            !backgroundImage && { backgroundColor },
          ]}
        >
          {children}
        </View>
      )}

      {footerUnScrollable()}
    </View>
  );

  return backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={[
        styles.backgroundImage,
        backgroundImageStyle,
        !translucent && {
          marginTop: statusBarColor && Platform.OS == "ios" ? 0 : insets.top,
        },
      ]}
      resizeMode={resizeMode}
    >
      {content()}
    </ImageBackground>
  ) : (
    content()
  );
};

export default ScreenWrapper;
