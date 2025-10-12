import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../components/icons';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';

import Button from '../components/Button';
import ButtonSecundary from '../components/ButtonSecundary';

const ConstructionCover = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botão de voltar com estilo próprio */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/SmarsCover.png')} // caminho da sua imagem
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>
        Que tal colocar a mão na massa e construir seu próprio robô?
      </Text>

      <Text style={styles.textSecundary}>
        Com o SMARS, você aprende robótica, eletrônica, programação e de um jeito simples, divertido e desafiador.
      </Text>

      <Button
        title="INICIAR"
        icon={<ArrowNextIcon />}
        onPress={() => console.log('Botão pressionado')}
      />
            <ButtonSecundary
        title="VOLTAR"
        //icon={<ArrowNextIcon />}
        onPress={() => console.log('Botão pressionado')}
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
  image: {
    width: 256,
    height: 214,
    marginHorizontal: 25,
    alignSelf:'flex-start',
  },
  text: {
    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.headerConstructions,
    //fontWeight:'bold',
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

export default ConstructionCover;
