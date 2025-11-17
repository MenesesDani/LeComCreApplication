import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { GameCard } from '../components/GameCard';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';

// Ícones - ajuste conforme seus componentes de ícone
import { HeartIcon, ShareIcon, BookmarkIcon } from '../components/icons/index';

const GamesScreen = () => {
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
        {/* Título "Construções" */}
        <Text style={styles.pageTitle}>Construções</Text>

        {/* Grid de Cards de Jogos */}
        <View style={styles.grid}>
          <GameCard image={require('../assets/ilustrations/Test.png')} />
          <GameCard image={require('../assets/ilustrations/Test.png')} />
        </View>

        {/* Lista de Construções */}
        <View style={styles.constructionsList}>
          {constructions.map((item) => (
            <View key={item.id} style={styles.constructionCard}>
              {/* Imagem à esquerda */}
              <Image
                source={item.image}
                style={styles.constructionImage}
                resizeMode="cover"
              />

              {/* Conteúdo à direita */}
              <View style={styles.constructionContent}>
                {/* Título */}
                <Text style={styles.constructionTitle}>{item.title}</Text>

                {/* Descrição */}
                <Text style={styles.constructionDescription}>
                  {item.description}
                </Text>

                {/* Botões de ação */}
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionButton}>
                    <HeartIcon width={20} height={20} color={colors.text.secundary} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <ShareIcon width={20} height={20} color={colors.text.secundary} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <BookmarkIcon width={20} height={20} color={colors.text.secundary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
  constructionCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  constructionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  constructionContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  constructionTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    fontSize: 14,
    color: colors.brand.deepBlue,
    lineHeight: 18,
    marginBottom: 4,
  },
  constructionDescription: {
    ...TYPOGRAPHY.body,
    fontSize: 12,
    color: colors.text.secundary,
    lineHeight: 16,
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    padding: 4,
  },
});

export default GamesScreen;