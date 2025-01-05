import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%", // Ensure the image covers the entire screen
  },
  contentContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 0,
  },
});
export default styles;
