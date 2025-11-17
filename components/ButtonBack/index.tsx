import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ArrowLeft } from "../icons/index";
import { colors } from '../../constants/colors';

interface ButtonBackProps {
  onPress?: () => void;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <ArrowLeft primaryColor={colors.text.secundary}
      width={24}
      height={24} />
    </TouchableOpacity>
  );
};

export default ButtonBack;
