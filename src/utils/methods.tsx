import { StyleSheet } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from "react-native-toast-message";
import React from "react";
import { height } from "./dimensions";
const showMessage = (
  type: "success" | "error" | "info",
  message = "",
  description = ""
): void => {
  Toast.show({
    text1: message,
    text2: description,
    type,
    position: "top",
  });
};

const successMessage = (description = "", message = "Success") =>
  showMessage("success", message, description);
const errorMessage = (description = "", message = "Error") =>
  showMessage("error", message, description);
const warningMessage = (description = "", message = "Warning") =>
  showMessage("info", message, description);

const GlobalMethods = {
  errorMessage,
  successMessage,
  warningMessage,
};

const commonStyles = StyleSheet.create({
  container: {
    borderLeftWidth: 0,
    width: "100%",
    marginTop: height(2),
    backgroundColor: undefined, // Set in component-specific styles
  },
  contentContainer: { paddingHorizontal: 15 },
  text1: { fontSize: 17, color: "white" },
  text2: { fontSize: 15, color: "white" },
});

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      style={{ ...commonStyles.container, backgroundColor: "green" }}
      contentContainerStyle={commonStyles.contentContainer}
      text1Style={commonStyles.text1}
      text2Style={commonStyles.text2}
      {...props}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      style={{ ...commonStyles.container, backgroundColor: "red" }}
      contentContainerStyle={commonStyles.contentContainer}
      text1Style={commonStyles.text1}
      text2Style={commonStyles.text2}
      {...props}
    />
  ),
};

export default GlobalMethods;
