import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { width, height } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderRadius: width(2),
    paddingVertical: height(1.5),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  primaryContainer: {
    backgroundColor: AppColors.primary,
  },
  secondaryContainer: {
    backgroundColor: AppColors.primary,
  },
  disableContainer: {
    backgroundColor: AppColors.snowWhite,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
