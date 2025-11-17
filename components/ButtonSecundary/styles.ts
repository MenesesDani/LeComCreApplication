import { StyleSheet } from 'react-native';
import { colors } from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: 'orange',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    alignSelf: 'stretch',
  },

  buttonPressed: {
    borderColor: colors.brand.orange,
    backgroundColor: 'transparent', 
  },

  buttonDisabled: {
    borderColor: '#ccc',
    backgroundColor: 'transparent',
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
    color: colors.brand.orange,
    fontWeight: '600',
    ...TYPOGRAPHY.button,
  },

  textDisabled: {
    color: '#999',
  },
});
