import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GameCard } from '../components/GameCard';

const GamesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <GameCard image={require('../assets/constructions/Smars/CardRoboSmars.png')} />
        <GameCard image={require('../assets/constructions/Smars/CardRoboSmars.png')} />
        <GameCard image={require('../assets/constructions/Smars/CardRoboSmars.png')} />
        <GameCard image={require('../assets/constructions/Smars/CardRoboSmars.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // alinha os itens ao topo
    paddingVertical: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
  },
    title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
});


export default GamesScreen;
