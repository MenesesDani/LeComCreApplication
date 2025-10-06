import { StyleSheet } from 'react-native';
import { colors } from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand.orange,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // quando o botão estiver pressionado
  buttonPressed: {
    opacity: 0.8,
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

  // espaçamento entre o ícone e o texto
  icon: {
    marginRight: 8,
  },

  // texto do botão
  text: {
    color: colors.text.principal,
    //fontSize: 16,
    fontWeight: '600',
    ...TYPOGRAPHY.button, // se tu tiver uma tipografia específica pra botões
  },

  textDisabled: {
    color: '#999',
  },
});
