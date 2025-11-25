import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from "../constants/colors";

const ConquestScreen = () => {
  const currentPoints = 32;
  const nextLevelPoints = 50;
  const progressPercentage = (currentPoints / nextLevelPoints) * 100;

  const medals = Array(12).fill(null);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Card de Nível */}
      <View style={styles.levelCard}>
        <View style={styles.medalContainer}>
          <Image
            source={require("../assets/exampleuser/Medal.png")}
            style={styles.medalImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.levelTitle}>Engenheiro</Text>
        <Text style={styles.levelSubtitle}>NÍVEL 2</Text>
      </View>

      {/* Card de Progresso */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Próximo nível</Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>

        <Text style={styles.progressText}>
          {currentPoints}/{nextLevelPoints}
        </Text>

        <Text style={styles.progressDescription}>
          Colete 50 pontos para avançar de nível
        </Text>
      </View>

      {/* Grid de Medalhas */}
      <View style={styles.medalsSection}>
        <Text style={styles.medalsTitle}>Suas medalhas</Text>

        <View style={styles.medalsGrid}>
          {medals.map((_, index) => (
            <View key={index} style={styles.medalSlot} />
          ))}
        </View>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  container: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 100,
    rowGap: 20,
  },

  levelCard: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  medalContainer: {
    marginBottom: 16,
  },
  medalImage: {
    width: 100,
    height: 100,
  },

  levelTitle: {
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 22,
    color: colors.brand.yellow,
    marginBottom: 4,
    textAlign: "center",
  },

  levelSubtitle: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: colors.brand.deepBlue,
    letterSpacing: 1,
    fontWeight: '600',
    textAlign: "center",
  },

  progressCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    rowGap: 10,
  },

  progressTitle: {
    ...TYPOGRAPHY.body,
    fontSize: 16,
    color: colors.brand.orange,
    marginBottom: 6,
  },

  progressBarContainer: {
    height: 12,
    backgroundColor: colors.brand.white,
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: colors.brand.orange,
    borderRadius: 6,
  },

  progressText: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: colors.text.principal,
    textAlign: 'right',
  },

  progressDescription: {
    ...TYPOGRAPHY.body,
    fontSize: 13,
    color: colors.text.secundary,
    lineHeight: 20,
  },

  /* MEDALHAS */
  medalsSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  medalsTitle: {
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 18,
    textAlign: 'center',
    color: colors.brand.deepBlue,
    marginBottom: 16,
  },

  medalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    justifyContent: 'center',
  },

  medalSlot: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.system.subsection,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },

  bottomSpacing: {
    height: 20,
  },
});

export default ConquestScreen;
