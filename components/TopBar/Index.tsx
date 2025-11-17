import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { EnergyIcon } from "../icons/index";
import { colors } from "../../constants/colors"; 
import { useNavigation } from "@react-navigation/native";

type TopBarProps = {
  name: string;
  energy: number;
  onProfilePress?: () => void;
};

export function TopBar({ name, energy, onProfilePress }: TopBarProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleEnergyPress = () => {
    // Animação de pulso quando tocado
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.7, // cresce 40%
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, // volta ao tamanho normal
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Olá, {name}</Text>

      <View style={styles.rightSection}>
        <TouchableOpacity onPress={handleEnergyPress} style={styles.energyContainer}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <EnergyIcon 
              width={16} 
              height={16} 
              primaryColor={colors.system.white}
              secondaryColor={colors.system.white} 
            />
          </Animated.View>
          <Text style={styles.energyText}>{energy}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          <Image
            source={require("../../assets/exampleuser/Profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}