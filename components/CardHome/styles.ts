import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { TYPOGRAPHY } from '../../constants/typography';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 10,
  },
  image: {
    width: 170,
    height: 157,
    borderRadius: 16,
  },
  title: {

    color: colors.brand.deepBlue,
    ...TYPOGRAPHY.body,
    fontWeight: '600',
  },
});