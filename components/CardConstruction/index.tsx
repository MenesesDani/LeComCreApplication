import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

type CardConstructionProps = {
  image: any;
  currentIndex?: number;
  totalItems?: number;
};

const CardConstruction: React.FC<CardConstructionProps> = ({ 
  image, 
  currentIndex = 0, 
  totalItems = 3 
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cardImage} resizeMode="contain" />
      
      <View style={styles.dotsContainer}>
        {Array.from({ length: totalItems }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CardConstruction;