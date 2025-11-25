import { StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../constants/typography';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  constructionCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  constructionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  constructionContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  constructionTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    fontSize: 14,
    color: colors.brand.deepBlue,
    lineHeight: 18,
    marginBottom: 4,
  },

  constructionDescription: {
    ...TYPOGRAPHY.body,
    fontSize: 12,
    color: colors.text.secundary,
    lineHeight: 16,
    marginBottom: 8,
  },

  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },

  actionButton: {
    padding: 4,
  },
});
