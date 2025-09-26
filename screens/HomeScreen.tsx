import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardBeta from "../components/CardBeta";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/Card2.png")} />
      <Text style={styles.text}>Tela Inicial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // centraliza horizontalmente
    marginTop: 20,        // distância do topo
  },
  text: {
    fontSize: 24,
    marginTop: 20,        // distância entre o card e o texto
  },
});

export default HomeScreen;
