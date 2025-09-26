import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,       // distância do topo
    marginHorizontal: 10,
    alignItems: "center" // centraliza apenas na horizontal
  },
  cardImage: {
    width: "100%",       // ocupa toda a largura do container pai
    height: 180,         // altura fixa (ajuste se precisar)
    borderRadius: 12,
    resizeMode: "cover", // garante que a imagem preencha
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#007AFF", // cor ativa
  },
  inactiveDot: {
    backgroundColor: "#C7C7CC", // cor inativa
  },
});
