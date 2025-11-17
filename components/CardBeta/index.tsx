import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

type CardBetaProps = {
  image: any;
};

const CardBeta: React.FC<CardBetaProps> = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default CardBeta;
