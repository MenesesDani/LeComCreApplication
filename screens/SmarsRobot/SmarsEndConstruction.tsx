// screens/SmarsRobot/SmarsEndConstruction.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TYPOGRAPHY } from '../../constants/typography';
import { colors } from '../../constants/colors';
import ButtonEmphasis from '../../components/ButtonEmphasis';
import ButtonSecundary from '../../components/ButtonSecundary';

const SmarsEndConstruction: React.FC = () => {
  const navigation = useNavigation<any>();

  const goBackToHome = () => {
    navigation.navigate('Tabs', { screen: 'Home' });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/constructions/Smars/SmarsCover.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>
        Parabéns!
      </Text>

      <Text style={styles.textSecundary}>
        Com seu robô pronto agora é começar a brincar, mas antes, vem aprender como cada peça funciona!
      </Text>

      <ButtonEmphasis
        title="Quero aprender mais"
        onPress={() => console.log('Botão principal pressionado')}
      />

      <View style={styles.buttonSecundaryWrapper}>
        <ButtonSecundary
          title="Concluir e brincar"
          onPress={goBackToHome}
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
    alignSelf: 'flex-start'
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

export default SmarsEndConstruction;