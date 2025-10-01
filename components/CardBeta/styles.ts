import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  card: {
    width: screenWidth - 40,
    height: 200,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
