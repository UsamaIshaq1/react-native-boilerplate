import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { useMemo } from 'react';
import {
  RefreshControl,
  ScrollViewProps,
  StatusBar,
  View,
  ImageBackground,
  ImageResizeMode,
  ImageSourcePropType,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import {
  EdgeInsets,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import styles from './styles';
import { height } from '~utils/dimensions';
import { AppColors } from '~utils';

export interface ScreenWrapperProps {
  children: React.ReactNode;
  statusBarColor?: string;
  translucent?: boolean;
  scrollEnabled?: boolean;
  backgroundImage?: ImageSourcePropType;
  backgroundImageStyle?: object;
  backgroundColor?: string;
  headerUnScrollable?: () => React.ReactElement | null;
  footerUnScrollable?: () => React.ReactElement | null;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  onScroll?: ScrollViewProps['onScroll'];
  isRefreshing?: boolean;
  enablePullToRefresh?: boolean;
  onRefresh?: () => void;
  resizeMode?: ImageResizeMode;
  applyBottomPadding?: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  statusBarColor = AppColors.white,
  translucent = false,
  scrollEnabled = false,
  backgroundImage = null,
  backgroundImageStyle = {},
  backgroundColor = AppColors.white,
  headerUnScrollable,
  footerUnScrollable,
  barStyle = 'dark-content',
  onScroll = () => null,
  isRefreshing = false,
  enablePullToRefresh = false,
  onRefresh = () => null,
  resizeMode = 'cover',
  applyBottomPadding = true,
}) => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  /* ---------- Focus Aware StatusBar ---------- */

  const FocusAwareStatusBar = useMemo(
    () =>
      ({ barStyle, backgroundColor, translucent }: any) =>
        isFocused ? (
          <StatusBar
            animated
            barStyle={barStyle}
            backgroundColor={backgroundColor}
            translucent={translucent}
          />
        ) : null,
    [isFocused],
  );

  /* ---------- SafeArea Edges ---------- */

  const safeAreaEdges: ('top' | 'bottom' | 'left' | 'right')[] =
    applyBottomPadding
      ? ['top', 'bottom', 'left', 'right']
      : ['top', 'left', 'right'];

  /* ---------- Memo Header/Footer ---------- */

  const Header = headerUnScrollable?.();
  const Footer = footerUnScrollable?.();

  /* ---------- Scroll Content ---------- */

  const renderScrollable = () => {
    if (scrollEnabled) {
      return (
        <KeyboardAwareScrollView
          refreshControl={
            enablePullToRefresh ? (
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
              />
            ) : undefined
          }
          onScroll={onScroll}
          keyboardShouldPersistTaps="handled"
          bottomOffset={height(4)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor,
            paddingBottom: applyBottomPadding ? insets.bottom : 0,
          }}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    }

    return (
      <View
        style={[
          styles.contentContainer,
          {
            backgroundColor,
          },
        ]}
      >
        {children}
      </View>
    );
  };

  /* ---------- Main Content ---------- */

  const content = () => (
    <>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={translucent}
      />

      <SafeAreaView
        style={{ flex: 1, backgroundColor }}
        edges={safeAreaEdges}
      >
        {Header}
        {renderScrollable()}
        {Footer}
      </SafeAreaView>
    </>
  );

  /* ---------- Background Image ---------- */

  if (backgroundImage) {
    return (
      <ImageBackground
        source={backgroundImage}
        resizeMode={resizeMode}
        style={[styles.backgroundImage, backgroundImageStyle]}
      >
        {content()}
      </ImageBackground>
    );
  }

  return content();
};

export default ScreenWrapper;