// screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
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

  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/constructions/Smars/CardRoboSmars.png")} />

      {/* Nova view que ocupa a largura e alinha o botão à direita */}
      <View style={styles.arrowContainer}>
        <ButtonNext onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // mantém o Card centralizado
    marginTop: 20,
  },
  arrowContainer: {
    width: "100%",         // ocupa toda a largura da tela
    alignItems: "flex-end",// alinha o conteúdo (o botão) à direita
    paddingHorizontal: 40, // distância das laterais
    marginTop: -24,        // mantém seu deslocamento anterior se for necessário
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default HomeScreen;
