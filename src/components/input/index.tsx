import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { Text, TextInput, View } from "react-native";
import { SmallText } from "~components/text";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";
import styles from "./styles";
import { InputProps } from "./types";

const Input: ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    placeholder,
    onChangeText,
    value,
    leftIcon = () => null,
    rightIcon = () => null,
    containerStyles = {},
    textInputStyle = {},
    error = null,
    secureTextEntry = false,
    label,
    placeholderTextColor = AppColors.grey,
    required,
    textInputProps,
  },
  ref
) => {
  return (
    <View style={[styles.mainContainer, containerStyles]}>
      <SmallText color={AppColors.black} textStyles={[styles.label]}>
        {label} {required && <Text style={styles.asterisk}>*</Text>}
      </SmallText>

      <View style={styles.textFieldContainer}>
        {leftIcon()}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          ref={ref}
          value={value}
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...textInputProps}
        />
        {rightIcon()}
      </View>
      {error && <Text style={styles.error}>{`*${error}`}</Text>}
    </View>
  );
};

export default forwardRef(Input);
