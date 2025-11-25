import React from 'react';
import { TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface CardHomeProps {
  image: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const CardHome: React.FC<CardHomeProps> = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardHome;