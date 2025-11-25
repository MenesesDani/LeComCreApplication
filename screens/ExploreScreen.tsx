import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ConstructionCard } from '../components/CardExplore';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';

const ExploreScreen = () => {
  const constructions = [
    {
      id: 1,
      image: require('../assets/ilustrations/Test.png'),
      title: 'Como funciona os resistores',
      description: 'Entenda como funciona um resistor de forma prática!',
    },
    {
      id: 2,
      image: require('../assets/ilustrations/Test.png'),
      title: 'Crie seu próprio robô em casa com garrafas pet',
      description: 'Com duas garrafas pet você consegue fazer um carrinho!',
    },
    {
      id: 3,
      image: require('../assets/ilustrations/Test.png'),
      title: 'Como funciona a resistência elétrica',
      description: 'Intensidade em amperes.',
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        {/* Título */}
        <Text style={styles.pageTitle}>Construções</Text>



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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 40,
  },
  constructionsList: {
    gap: 20,
  },
});

export default ExploreScreen;
