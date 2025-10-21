import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.brand.white,
    borderRadius: 8,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: colors.brand.blue, // cor do progresso preenchido
  },
});
