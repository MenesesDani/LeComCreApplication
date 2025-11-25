import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CardHome from "../components/CardHome";

const GamesScreen = () => {
  const handleCardPress = (gameName: string) => {
    console.log(`Jogo ${gameName} pressionado`);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.grid}>
        <CardHome
          image={require('../assets/ilustrations/Games/Memória.png')}
          title="Jogo da memória"
          onPress={() => handleCardPress("Jogo 1")}
        />
        <CardHome
          image={require('../assets/ilustrations/Games/Resistores.png')}
          title="Ligue os resistores"
          onPress={() => handleCardPress("Jogo 2")}
        />
        <CardHome
          image={require('../assets/ilustrations/Games/Me.png')}
          title="Quiz"
          onPress={() => handleCardPress("Jogo 3")}
        />
        <CardHome
          image={require('../assets/ilustrations/Games/Capture.png')}
          title="Quem sou eu"
          onPress={() => handleCardPress("Jogo 4")}
        />
        <CardHome
          image={require('../assets/ilustrations/Games/Palavras.png')}
          title="Caça palavras"
          onPress={() => handleCardPress("Jogo 5")}
        />
        <CardHome
          image={require('../assets/ilustrations/Games/Cobrinha.png')}
          title="Cobrinha"
          onPress={() => handleCardPress("Jogo 6")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '100%',
  },
});

export default GamesScreen;