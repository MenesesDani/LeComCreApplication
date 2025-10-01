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
  // Adicione a tipagem ao useNavigation
  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    console.log("Botão Next pressionado!");
    navigation.navigate("ConstructionCover");
  };

  return (
    <View style={styles.container}>
      <CardBeta image={require("../assets/CardRoboSmars.png")} />

      <ButtonNext onPress={handleNext} style={styles.arrow} />

      <Text style={styles.text}>Tela Inicial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  arrow: {
    alignSelf: "flex-end",
    marginHorizontal: 40,
    marginTop: -24,
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default HomeScreen;