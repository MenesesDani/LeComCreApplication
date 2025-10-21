import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors"; // ajuste o caminho se necessário

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 88,
    //marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20, // troquei marginHorizontal por padding
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  sideButton: {
    width: 56,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowWrapper: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    color: colors.brand.orange,
    textAlign: "center",
    
  },
  dots: {
    width: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.secundary,
    opacity: 0.9,
  },
});