import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 90,
    gap: 5,
  },
  energyIcon: {
    fontSize: 16,
    marginRight: 4,
    color: "#fff",
  },
  energyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});
