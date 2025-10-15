import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../../components/icons';
import { TYPOGRAPHY } from "../../constants/typography";
import { colors } from '../../constants/colors';

import ButtonSecundary from '../../components/ButtonSecundary';
import ButtonBack from '../../components/ButtonBack';
import ButtonEmphasis from '../../components/ButtonEmphasis';
import Button from '../../components/Button';

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

      {/* 🔹 Container horizontal dos botões */}
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
    backgroundColor: '#ff0000ff',
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
    alignSelf: 'flex-start',
  },
  textSecundary: {
    color: colors.text.secundary,
    ...TYPOGRAPHY.body,
    marginHorizontal: 25,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',           // ocupa toda a largura disponível
    paddingHorizontal: 25,   // define a margem lateral de 25px
    marginVertical: 10,
    columnGap: 20,           // espaço de 20px entre os botões
  },
  buttonWrapper: {
    flex: 1,
  },
});

export default Construction1;
