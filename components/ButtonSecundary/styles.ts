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
    marginHorizontal: 25,
  },

  // quando o botão estiver pressionado
  buttonPressed: {
    borderColor: colors.brand.orange, // 👈 borda muda para o laranja brand
    backgroundColor: 'transparent',   // 👈 mantém o fundo transparente
  },

  // quando o botão estiver desativado
  buttonDisabled: {
    borderColor: '#ccc',
    backgroundColor: 'transparent',
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
    color: colors.brand.orange,
    fontWeight: '600',
    ...TYPOGRAPHY.button,
  },

  textDisabled: {
    color: '#999',
  },
});
