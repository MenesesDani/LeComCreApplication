import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ConstructionCard } from '../components/CardExplore';
import CardHome from "../components/CardHome";
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';

const ExploreScreen = () => {
  const handleCardPress = (cardName) => {
    console.log(`Pressed: ${cardName}`);
  };

  const constructions = [
    {
      id: 1,
      image: require('../assets/ilustrations/Comunity/Resistor.jpg'),
      title: 'Como funciona os resistores',
      description: 'Entenda como funciona um resistor de forma prática!',
    },
    {
      id: 2,
      image: require('../assets/ilustrations/Comunity/Robot.jpg'),
      title: 'Crie seu próprio robô em casa com garrafas pet',
      description: 'Com duas garrafas pet você consegue seu próprio robô!',
    },
    {
      id: 3,
      image: require('../assets/ilustrations/Comunity/Arduino.jpg'),
      title: 'Entenda como funciona o Arduino',
      description: 'Veja como essa peça pode transformar tudo em um computador',
    },
        {
      id: 4,
      image: require('../assets/ilustrations/Comunity/Kit.jpeg'),
      title: 'Quem criou o Lé com Cré?',
      description: 'Conheça todas as pessoas envolvidas nesse projeto',
    },
  ];

  const communityCards = [
    {
      id: 1,
      image: require('../assets/ilustrations/BoatConstruction.png'),
      title: "Barco Robô",
    },
    {
      id: 2,
      image: require('../assets/ilustrations/SmarsConstruction.png'),
      title: "Robô Smars",
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        
        {/* Seção Construções */}
        <Text style={styles.pageTitle}>Todas as construções</Text>
        
        {/* Grid 2x2 */}
        <View style={styles.grid}>
          {communityCards.map((card) => (
            <CardHome
              key={card.id}
              image={card.image}
              title={card.title}
              onPress={() => handleCardPress(card.title)}
            />
          ))}
        </View>

        {/* Seção Comunidade */}
        <Text style={styles.sectionTitle}>Nossa comunidade</Text>

        {/* Lista de construções */}
        <View style={styles.constructionsList}>
          {constructions.map((item) => (
            <ConstructionCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  pageTitle: {
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 24,
    color: colors.brand.deepBlue,
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  sectionTitle: {
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 24,
    color: colors.brand.deepBlue,
    marginBottom: 25,
    marginTop: 40,
    alignSelf: 'flex-start',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 20,
  },
  constructionsList: {
    gap: 20,
  },
});

export default ExploreScreen;