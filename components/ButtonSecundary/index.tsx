import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: object;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, style, disabled = false }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,   // 👈 aplica estilo ao pressionar
        disabled && styles.buttonDisabled, // 👈 aplica estilo se desativado
        style,
      ]}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={disabled ? styles.textDisabled : styles.text}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
