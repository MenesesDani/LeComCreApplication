import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../../components/icons';
import { TYPOGRAPHY } from "../../constants/typography";
import { colors } from '../../constants/colors';

import ButtonSecundary from '../../components/ButtonSecundary';
import Button from '../../components/Button';
import TopBarConstruction from '../../components/TopBarConstruction';
import ProgressBar from '../../components/ProgressBar';

const Construction1 = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe}>
      <TopBarConstruction
        title="Montagem"
        onBackPress={() => navigation.goBack()}
        onMenuPress={() => console.log('abrir menu')}
      />

      <View style={styles.container}>
        <View style={styles.gifContainer}>
          <Image
            source={require('../../assets/GifTest.gif')}
            style={styles.gif}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.text}>
          Entendendo tudo
        </Text>

        <Text style={styles.textSecundary}>
          Antes de começar, é importante organizar todos os materiais.
          A estrutura do robô é composta por peças impressas em 3D,
          a parte eletrônica, que inclui dois motores, uma placa Arduino,
          um driver de motor, um sensor ultrassônico e fios jumper para
          as conexões. Tudo que você precisa está na caixinha, vamos
          por partes!
        </Text>

        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <ButtonSecundary
              title="VOLTAR"
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              title="PRÓXIMO"
              icon={<ArrowNextIcon />}
              onPress={() => console.log('Próximo')}
            />
          </View>
        </View>

        <View style={styles.progressWrapper}>
          <ProgressBar currentStep={1} totalSteps={12} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20, // garante margem no topo
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
  gif: {
    width: '100%',
    height: '100%',
  },
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
  buttonWrapper: {
    flex: 1,
  },
  progressWrapper: {
    width: '100%',
    marginTop: 16,
  },
});

export default Construction1;
