import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles'; // 👈 agora usa o styles externo

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: object; // 👈 opcional: permite estilizar externamente
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
