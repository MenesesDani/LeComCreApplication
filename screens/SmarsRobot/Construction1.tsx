import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowNextIcon } from '../../components/icons';
import { TYPOGRAPHY } from "../../constants/typography";
import { colors } from '../../constants/colors';

import ButtonSecundary from '../../components/ButtonSecundary';
import ButtonBack from '../../components/ButtonBack';
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 25,
    paddingHorizontal: 25,
  },
  gifContainer: {
    marginHorizontal: 25,
    width: '100%',
    height: 332,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#ff0000ff', // para testar visualmente
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
});

export default Construction1;
