import { StyleSheet } from 'react-native';
import { colors } from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand.orange,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    alignSelf: 'stretch',
    marginHorizontal: 25, 
  },

  buttonPressed: {
    backgroundColor: colors.brand.yellow,
  },

  buttonDisabled: {
    backgroundColor: '#ccc',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    marginLeft: 10,
  },

  text: {
    color: colors.system.white,
    fontWeight: '600',
    ...TYPOGRAPHY.button,
  },

  textDisabled: {
    color: '#999',
  },
});
