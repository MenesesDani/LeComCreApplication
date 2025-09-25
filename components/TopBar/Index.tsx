import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { EnergyIcon } from "../icons/index";
import { colors } from "../../constants/colors"; 

type TopBarProps = {
  name: string;
  energy: number;
  onProfilePress?: () => void;
};

export function TopBar({ name, energy, onProfilePress }: TopBarProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Olá, {name}</Text>

      <View style={styles.rightSection}>
        <View style={styles.energyContainer}>
          <EnergyIcon 
            width={16} 
            height={16} 
            primaryColor={colors.system.white}
            secondaryColor={colors.system.white} 
          />
          <Text style={styles.energyText}>{energy}</Text>
        </View>

        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          <Image
            source={require("../../assets/Profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}