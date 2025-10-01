import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardBeta from "../components/CardBeta";
import ButtonNext from '../components/ButtonNext';

const HomeScreen = () => {
  const handleNext = () => {
    console.log('Botão Next pressionado!');
    // Adicione aqui a navegação ou ação desejada
    // navigation.navigate('ProximaTela');
  };

  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/CardRoboSmars.png")} />
      <Text style={styles.text}>Tela Inicial</Text>
      
      <ButtonNext onPress={handleNext} />
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