import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

interface GameCardProps {
  image: any;
  onPress?: () => void;
}

export function GameCard({ image, onPress }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      />
    </TouchableOpacity>
  );
}
