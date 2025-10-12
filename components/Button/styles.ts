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
    marginHorizontal: 25, // 👈 largura total com margem lateral
  },

  // quando o botão estiver pressionado
  buttonPressed: {
    backgroundColor: colors.brand.yellow, // 👈 muda o tom ao pressionar
  },

  // quando o botão estiver desativado
  buttonDisabled: {
    backgroundColor: '#ccc',
  },

  // conteúdo interno (texto + ícone)
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
