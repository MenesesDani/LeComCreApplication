// screens/SmarsRobot/SmarsEndConstruction.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { TYPOGRAPHY } from '../../constants/typography';
import { colors } from '../../constants/colors';
import Button from '../../components/Button';

const SmarsEndConstruction: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.sub}>Você finalizou a montagem do Smars.</Text>

        <View style={{ width: '100%', marginTop: 24 }}>
          <Button title="Voltar ao Início" onPress={() => { /* navigation se precisar */ }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 28,
    color: colors.brand.deepBlue,
    marginBottom: 8,
  },
  sub: {
    ...TYPOGRAPHY.body,
    color: colors.text.secundary,
    textAlign: 'center',
  },
});

export default SmarsEndConstruction;
