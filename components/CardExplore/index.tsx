import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { HeartIcon, ShareIcon, BookmarkIcon } from '../icons';
import { colors } from '../../constants/colors';

export const ConstructionCard = ({ image, title, description }) => {
  return (
    <View style={styles.constructionCard}>
      {/* Imagem à esquerda */}
      <Image source={image} style={styles.constructionImage} resizeMode="cover" />

      {/* Conteúdo à direita */}
      <View style={styles.constructionContent}>

        <Text style={styles.constructionTitle}>{title}</Text>

        <Text style={styles.constructionDescription}>{description}</Text>

        {/* Botões de ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <HeartIcon width={20} height={20} color={colors.text.secundary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <ShareIcon width={20} height={20} color={colors.text.secundary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <BookmarkIcon width={20} height={20} color={colors.text.secundary} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};
