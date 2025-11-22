// screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CardBeta from "../components/CardBeta";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonNext from "../components/ButtonNext";

// Defina o tipo das suas rotas
type RootStackParamList = {
  Home: undefined;
  ConstructionCover: undefined;
  // Adicione outras telas aqui conforme necessário
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    console.log("Botão Next pressionado!");
    navigation.navigate("ConstructionCover");
  };

  const handleCard1Press = () => {
    console.log("Card 1 pressionado!");
    // Navegue para onde desejar
  };

  const handleCard2Press = () => {
    console.log("Card 2 pressionado!");
    // Navegue para onde desejar
  };

  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/constructions/Smars/CardRoboSmars.png")} />

      {/* Botão Next alinhado à direita */}
      <View style={styles.arrowContainer}>
        <ButtonNext onPress={handleNext} />
      </View>

      {/* Cards quadrados lado a lado */}
      <View style={styles.squareCardsContainer}>
        <TouchableOpacity 
          style={styles.squareCard}
          onPress={handleCard1Press}
          activeOpacity={0.7}
        >
          <Image 
            source={require("../assets/constructions/Smars/CardRoboSmars.png")}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.squareCard}
          onPress={handleCard2Press}
          activeOpacity={0.7}
        >
          <Image 
            source={require("../assets/constructions/Smars/CardRoboSmars.png")}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  squareCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch", // respeita as margens do container pai
    paddingHorizontal: 40,
    marginTop: 20,
    gap: 16, // espaçamento entre os cards
  },
  squareCard: {
    flex: 1,
    aspectRatio: 1, // mantém o card quadrado
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  arrowContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 40,
    marginTop: -24,
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default HomeScreen;