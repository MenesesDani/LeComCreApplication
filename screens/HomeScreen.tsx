import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonNext from "../components/ButtonNext";
import BetaMessage from "../components/BetaMessage";
import CardHome from "../components/CardHome";


type RootStackParamList = {
  Home: undefined;
  ConstructionCover: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    navigation.navigate("ConstructionCover");
  };

  const handleCardPress = (cardName: string) => {
    console.log(`Card ${cardName} pressionado`);
  };

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainCardWrapper}>
        <Image
          source={require("../assets/constructions/Smars/CardRoboSmars.png")}
          style={styles.mainCardImage}
          resizeMode="cover"
        />
        
        <View style={styles.arrowContainer}>
          <ButtonNext onPress={handleNext} />
        </View>
      </View>

      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.cardsHomeContainer}>
        <CardHome
          image={require("../assets/ilustrations/Point.png")}
          title="Comunidade"
          onPress={() => handleCardPress("Comunidade")}
        />
        
        <CardHome
          image={require("../assets/ilustrations/Conquest.png")}
          title="Conquistas"
          onPress={() => handleCardPress("Conquistas")}
        />
      </View>

      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Novidades na plataforma</Text>
        <View style={styles.newsRow}>
          <Image
            source={require("../assets/constructions/Smars/CardRoboSmars.png")}
            style={styles.newsImage}
            resizeMode="cover"
          />
          <Image
            source={require("../assets/constructions/Smars/CardRoboSmars.png")}
            style={styles.newsImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <BetaMessage />

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: 100,
  },
  mainCardWrapper: {
    width: "88%",
    position: "relative",
  },
  mainCardImage: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d0d0d0",
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4aa3ff",
  },
  arrowContainer: {
    position: "absolute",
    bottom: -20,
    right: -5,
  },
  cardsHomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 24,
    marginTop: 20,
    gap: 16,
  },
  newsContainer: {
    marginTop: 28,
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  newsRow: {
    flexDirection: "row",
    gap: 12,
  },
  newsImage: {
    flex: 1,
    height: 110,
    borderRadius: 12,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default HomeScreen;