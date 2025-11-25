import { StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../constants/typography';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  constructionCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    gap: 12,
  },
  constructionImage: {
    width: 120,
    height: 160,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
  },

  constructionContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 4,
  },

  constructionTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: '700',
    fontSize: 18,
    color: colors.brand.deepBlue,
    lineHeight: 24,
    marginBottom: 8,
  },

  constructionDescription: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: colors.text.secundary,
    lineHeight: 20,
    marginBottom: 16,
    flex: 1,
  },

  actionButtons: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  actionButton: {
    padding: 6,
  },
});