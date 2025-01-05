import { StyleProp, TextInputProps, ViewStyle } from "react-native";

interface errorProps {
  message?: string;
}
export interface InputProps {
  onChangeText: (val: string) => void;
  leftIcon?: () => React.ReactNode;
  rightIcon?: () => React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
  textFieldContainer?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  error?: errorProps | null;
  secureTextEntry?: boolean;
  required?: boolean;
  textInputStyle?: ViewStyle;
  placeholder?: string;
  label?: string;
  placeholderTextColor?: string;
  value: string;
  textInputProps?: TextInputProps;
}
