import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles'; // 👈 agora usa o styles externo

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
