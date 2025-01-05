import React, { FC, ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";

interface TextProps {
  children: ReactNode;
  size?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  textStyles?: any;
  textProps?: any; // You can replace `any` with specific Text component props
  onPress?: (() => void) | undefined;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
}

const CustomText: FC<TextProps> = ({
  children,
  size = 3.6,
  textAlign = "auto",
  color = AppColors.black,
  textStyles,
  textProps,
  onPress,
  textDecorationLine = "none",
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
    },
  });

  return (
    <Pressable disabled={!onPress} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const LargeText: FC<TextProps> = (props) => (
  <CustomText {...props} size={props?.size || 5} />
);
export const MediumText: FC<TextProps> = (props) => (
  <CustomText {...props} size={props?.size || 4} />
);
export const SmallText: FC<TextProps> = (props) => (
  <CustomText {...props} size={props?.size || 3.6} />
);
export const UnderLineText: FC<TextProps> = (props) => (
  <CustomText
    {...props}
    size={props?.size || 4}
    textDecorationLine="underline"
  />
);

export default CustomText;
