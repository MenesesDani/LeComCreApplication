import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { ArrowNextIcon } from '../components/icons';

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

      <Text style={styles.text}>
        Teste de tela, essa seria a tela da capa da construção
      </Text>

      {/* Botão principal estilizado no próprio componente */}
      <Button
        title="Continuar"
        icon={<ArrowNextIcon />}
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
  text: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default ConstructionCover;
