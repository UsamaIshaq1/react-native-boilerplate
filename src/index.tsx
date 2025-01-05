import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Routes from "~routes";
import { toastConfig } from "~utils/methods";
import Toast from "react-native-toast-message";

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toast config={toastConfig} />
    </Provider>
  );
}
