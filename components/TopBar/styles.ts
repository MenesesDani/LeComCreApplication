import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 40,
    
    //Quando tiver conteúdo, esse fundo precisa ser desfocado e transparente.
    backgroundColor: colors.system.white,
  },
  greeting: {
    ...TYPOGRAPHY.header02,
    fontWeight: "bold",
    color: colors.brand.deepBlue,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  energyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.brand.orange,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 2,
  },
  energyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.system.white,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});