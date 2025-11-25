import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { TYPOGRAPHY } from '../../constants/typography';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 16,
  },
  title: {
    width: 200, 
    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    textAlign: 'left',
  },
});