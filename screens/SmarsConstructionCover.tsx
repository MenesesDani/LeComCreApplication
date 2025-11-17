import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../components/icons';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';
import ButtonSecundary from '../components/ButtonSecundary';
import ButtonBack from '../components/ButtonBack';
import ButtonEmphasis from '../components/ButtonEmphasis';

const ConstructionCover = () => {
  const navigation = useNavigation<any>();

  const goBackToHome = () => {
    navigation.navigate('Tabs', { screen: 'Home' });
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPress={goBackToHome} />

      <Image
        source={require('../assets/constructions/Smars/SmarsCover.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>
        Que tal colocar a mão na massa e construir seu próprio robô?
      </Text>

      <Text style={styles.textSecundary}>
        Com o SMARS, você aprende robótica, eletrônica e programação de um jeito simples, divertido e desafiador.
      </Text>

      <ButtonEmphasis
        title="INICIAR"
        icon={<ArrowNextIcon />}
        onPress={() => navigation.navigate('Construction1')}
      />

      <View style={styles.buttonSecundaryWrapper}>
        <ButtonSecundary
          title="IR PARA AS CONSTRUÇÕES"
          onPress={() => console.log('Botão pressionado')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 25,
  },
  image: {
    width: 256,
    height: 214,
    marginHorizontal: 25,
    alignSelf: 'flex-start',
  },
  text: {
    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.headerConstructions,
    fontSize: 24,
    marginHorizontal: 25,
    lineHeight: 30,
  },
  textSecundary: {
    color: colors.text.secundary,
    ...TYPOGRAPHY.body,
    marginHorizontal: 25,
    lineHeight: 22,
  },
  buttonSecundaryWrapper: {
    width: '100%',
    paddingHorizontal: 25,
  },
});

export default ConstructionCover;
