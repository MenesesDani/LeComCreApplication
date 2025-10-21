import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type ProgressBarProps = {
  currentStep: number; // passo atual
  totalSteps: number;  // total de passos
  height?: number;     // opcional: altura da barra
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  height = 8,
}) => {
  const progress = Math.min(currentStep / totalSteps, 1); // valor entre 0 e 1

  return (
    <View style={[styles.container, { height }]}>
      <View style={[styles.progress, { flex: progress }]} />
      <View style={{ flex: 1 - progress }} />
    </View>
  );
};

export default ProgressBar;
