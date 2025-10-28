// screens/SmarsRobot/Construction1.tsx
import React from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, Image, Platform, StatusBar,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { ArrowNextIcon } from '../../components/icons';
import { TYPOGRAPHY } from '../../constants/typography';
import { colors } from '../../constants/colors';
import ButtonSecundary from '../../components/ButtonSecundary';
import Button from '../../components/Button';
import TopBarConstruction from '../../components/TopBarConstruction';
import ProgressBar from '../../components/ProgressBar';
import { steps } from './stepsData'; // import relativo

type RouteParams = {
  Construction: { stepIndex?: number };
};

const Construction1: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<RouteParams, 'Construction'>>();
  const stepIndex = route.params?.stepIndex ?? 0;
  const total = steps.length;
  const step = steps[Math.min(Math.max(0, stepIndex), total - 1)];

  // 👉 Avançar para o próximo passo ou tela final
  const goNext = () => {
    if (stepIndex + 1 < total) {
      navigation.navigate('Construction', { stepIndex: stepIndex + 1 });
    } else {
      navigation.navigate('SmarsEndConstruction');
      // Se quiser impedir voltar, use:
      // navigation.replace('SmarsEndConstruction');
    }
  };

  // 👉 Voltar um passo dentro da montagem
  const goBackStep = () => {
    if (stepIndex > 0) {
      navigation.navigate('Construction', { stepIndex: stepIndex - 1 });
    } else {
      navigation.navigate('ConstructionCover'); // volta pra capa se estiver no primeiro passo
    }
  };

  // 👉 Voltar direto pra capa (setinha do topo)
  const goBackToCover = () => {
    navigation.navigate('ConstructionCover');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TopBarConstruction
        title={step.title}
        onBackPress={goBackToCover} // ← setinha do topo vai pra capa
        onMenuPress={() => console.log('abrir menu')}
      />

      <View style={styles.container}>
        <View style={styles.gifContainer}>
          <Image source={step.gif} style={styles.gif} resizeMode="cover" />
        </View>

        <Text style={styles.text}>{step.header}</Text>

        <Text style={styles.textSecundary}>{step.body}</Text>

        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <ButtonSecundary title="VOLTAR" onPress={goBackStep} />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              title={stepIndex + 1 === total ? 'FINALIZAR' : 'PRÓXIMO'}
              icon={<ArrowNextIcon />}
              onPress={goNext}
            />
          </View>
        </View>

        <View style={styles.progressWrapper}>
          <ProgressBar currentStep={stepIndex + 1} totalSteps={total} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
    paddingHorizontal: 25,
  },
  gifContainer: {
    marginHorizontal: 25,
    width: '100%',
    height: 320,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#b3b3b3ff',
  },
  gif: { width: '100%', height: '100%' },
  text: {
    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 24,
    lineHeight: 30,
    alignSelf: 'flex-start',
  },
  textSecundary: {
    color: colors.text.secundary,
    ...TYPOGRAPHY.body,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    columnGap: 20,
  },
  buttonWrapper: { flex: 1 },
  progressWrapper: { width: '100%', marginTop: 16 },
});

export default Construction1;
