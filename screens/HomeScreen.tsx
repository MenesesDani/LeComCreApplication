import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardBeta from "../components/CardBeta";
import ButtonNext from "../components/ButtonNext";

const HomeScreen = () => {
  const handleNext = () => {
    console.log("Botão Next pressionado!");
  };

  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/CardRoboSmars.png")} />

      {/* aqui você controla onde o ButtonNext vai ficar */}
      <ButtonNext onPress={handleNext} style={styles.arrow} />

      <Text style={styles.text}>Tela Inicial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // centraliza o CardBeta e o Texto
    marginTop: 20,
  },
  arrow: {
    alignSelf: "flex-end", // joga o botão para a esquerda
    marginHorizontal: 40,          // distância da borda esquerda
    marginTop: -24,           // espaço em relação ao CardBeta
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default HomeScreen;
