import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  card: {
    width: screenWidth - 40,   // largura da tela menos 20px de cada lado
    height: 186,               // altura fixa
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    overflow: "hidden",        // respeita o borderRadius
    marginHorizontal: 20,      // margem lateral de 20px
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",             // ocupa toda a largura do card
    height: "100%",            // ocupa toda a altura do card
    resizeMode: "cover",       // preenche o card sem distorcer
  },
});
