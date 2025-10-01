import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { ArrowBigIcon } from "../icons/index";
import { styles } from './styles';

interface ButtonNextProps extends TouchableOpacityProps {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

const ButtonNext = ({ 
  primaryColor = '#FFFFFF', 
  secondaryColor = '#FFFFFF',
  backgroundColor = '#FF9500',
  style,
  ...props 
}: ButtonNextProps) => {
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }, style]} 
      activeOpacity={0.7}
      {...props}
    >
      <ArrowBigIcon 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor}
      />
    </TouchableOpacity>
  );
};

export default ButtonNext;