import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, TouchableOpacityProps } from 'react-native';
import { ArrowBigIcon } from '../icons';
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface ButtonNextProps extends TouchableOpacityProps {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

const ButtonNext = ({
  primaryColor = colors.system.white,
  secondaryColor = colors.system.white,
  backgroundColor = colors.brand.orange,
  style,
  ...props
}: ButtonNextProps) => {
  // Animação de pulso
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.08,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();

    return () => pulse.stop();
  }, [scaleAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[styles.container, { backgroundColor }, style]}
        activeOpacity={0.7}
        {...props}
      >
        <ArrowBigIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ButtonNext;
