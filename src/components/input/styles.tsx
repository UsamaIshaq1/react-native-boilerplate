import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    width: width(90),
  },
  label: {},
  textFieldContainer: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
    borderRadius: width(1.5),
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: AppColors.black,
    borderWidth: width(0.3),
    marginTop: height(1),
    paddingHorizontal: width(2),
  },
  textInput: {
    flex: 1,
    height: Platform.OS === "ios" ? height(6) : height(6.5),
    color: AppColors.black,
    fontSize: width(3.6),
    marginHorizontal: width(2),
  },
  error: {
    marginTop: height(1),
    color: AppColors.red,
  },
  asterisk: {
    color: AppColors.red,
    fontSize: width(4),
  },
});
export default styles;
