import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../components/ButtonBack';
import { TYPOGRAPHY } from "../constants/typography";
import { colors } from '../constants/colors';
import Button from '../components/Button';
import ButtonSecundary from '../components/ButtonSecundary';

const UserScreen = () => {
  const navigation = useNavigation<any>();

  const goBackToHome = () => {
    navigation.navigate('Tabs', { screen: 'Home' });
  };

  const handleLogout = () => {
    console.log('Sair');
    // Implementar lógica de logout
  };

  const handleSupport = () => {
    console.log('Suporte');
    // Implementar navegação para suporte
  };

  const handleHelp = () => {
    console.log('Ajuda');
    // Implementar navegação para ajuda
  };

  const handleSecurity = () => {
    console.log('Segurança');
    // Implementar navegação para segurança
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPress={goBackToHome} />

      <View style={styles.content}>
        <Image
          source={require('../assets/exampleuser/Profile.png')}
          style={styles.profileImage}
        />
        
        <Text style={styles.name}>Pedro Guilherme</Text>
        <Text style={styles.age}>17 anos</Text>

        <Text style={styles.betaDescription}>
          Este app ainda está em versão beta, mas em breve estará pronto para mais montagens!
        </Text>

        <View style={styles.divider} />

        <View style={styles.buttonsContainer}>
          <ButtonSecundary title="Suporte" onPress={handleSupport} />
          <ButtonSecundary title="Ajuda" onPress={handleHelp} />
          <ButtonSecundary title="Segurança" onPress={handleSecurity} />
          <Button title="Sair" onPress={handleLogout} />
        </View>
      </View>

      <Text style={styles.version}>Versão Beta 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 12,
    paddingHorizontal: 25,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 8,
  },
  name: {
    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.headerConstructions,
  },
  age: {
    color: colors.text.secundary,
    ...TYPOGRAPHY.body,
  },
  betaDescription: {
    color: colors.text.secundary,
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    lineHeight: 22,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.text.secundary,
    opacity: 0.2,
    marginVertical: 8,
  },
  buttonsContainer: {
    width: '100%',
    rowGap: 12,
  },
  version: {
    color: colors.text.secundary,
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export default UserScreen;