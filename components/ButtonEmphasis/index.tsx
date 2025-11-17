import React, { useEffect, useRef } from 'react';
import { Pressable, Text, View, Animated, Easing, Dimensions } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: object;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, icon, style, disabled = false }) => {
  const anim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const horizontalMargin = 25;

  useEffect(() => {
    if (disabled) {
      anim.stopAnimation();
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    loop.start();
    return () => loop.stop();
  }, [anim, disabled]);

  const buttonWidth = screenWidth - horizontalMargin * 2;

  const maxScale = (buttonWidth + 15) / buttonWidth;
  const minScale = (buttonWidth - 15) / buttonWidth;

  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, maxScale],
  });

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          disabled && styles.buttonDisabled,
          { width: buttonWidth, marginHorizontal: horizontalMargin },
          style,
        ]}
      >
        <View style={styles.content}>
          <Text style={disabled ? styles.textDisabled : styles.text}>{title}</Text>
          {icon && <View style={styles.icon}>{icon}</View>}
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Button;
