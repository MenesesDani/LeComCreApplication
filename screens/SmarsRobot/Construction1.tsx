import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../../components/icons';
import { TYPOGRAPHY } from "../../constants/typography";
import { colors } from '../../constants/colors';

import ButtonSecundary from '../../components/ButtonSecundary';
import ButtonBack from '../../components/ButtonBack';
import ButtonEmphasis from '../../components/ButtonEmphasis';

const Construction1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonBack />

      <View style={styles.gifContainer}>
        <Image
          source={require('../../assets/GifTest.gif')}
          style={styles.gif}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.text}>
        Título principal aqui
      </Text>

      <Text style={styles.textSecundary}>
        Texto secundário explicativo aqui. Você pode adicionar mais detalhes e informações relevantes.
      </Text>

      <ButtonEmphasis
        title="PRÓXIMO"
        icon={<ArrowNextIcon />}
        onPress={() => console.log('Próximo')}
      />

      <ButtonSecundary
        title="VOLTAR"
        onPress={() => navigation.goBack()}
      />
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
  gifContainer: {
    width: 256,
    height: 214,
    marginHorizontal: 25,
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: '100%',
    height: '100%',
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
});

export default Construction1;