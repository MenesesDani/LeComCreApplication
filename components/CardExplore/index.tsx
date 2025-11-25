import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import { HeartIcon, ShareIcon, BookmarkIcon } from '../icons';
import { colors } from '../../constants/colors';

interface ConstructionCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

export const ConstructionCard = ({ image, title, description }: ConstructionCardProps) => {
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
            <HeartIcon width={20} height={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <ShareIcon width={20} height={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <BookmarkIcon width={20} height={20} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};