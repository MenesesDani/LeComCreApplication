import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { TYPOGRAPHY } from '../../constants/typography';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.brand.orange, // cor do SVG
  },
});
