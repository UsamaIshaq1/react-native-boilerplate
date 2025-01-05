import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent:'center'
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(16),
    marginBottom: height(16),
  },
  inputContainer: {
    marginVertical: height(16),
    backgroundColor: AppColors.white,
    paddingVertical: height(16),
    paddingHorizontal: width(8),
    borderRadius: width(12),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logo: {
    width: width(50),
    height: width(50),
    marginBottom: height(2),
  },
});
export default styles;
