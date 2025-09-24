import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type TopBarProps = {
  name: string;
  energy: number;
  onProfilePress?: () => void;
};

export function TopBar({ name, energy, onProfilePress }: TopBarProps) {
  return (
    <View style={styles.container}>
      {/* Saudação */}
      <Text style={styles.greeting}>Olá, {name}</Text>

      <View style={styles.rightSection}>
        {/* Energia */}
        <View style={styles.energyContainer}>
          <Text style={styles.energyIcon}>⚡</Text>
          <Text style={styles.energyText}>{energy}</Text>
        </View>

        {/* Perfil */}
        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          {/* <Image
            source={require("../../assets/profile.png")} // substitua pelo seu ícone
            style={styles.profileIcon}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
