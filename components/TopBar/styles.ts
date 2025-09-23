import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F5F5F5",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A2A43",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  energyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF9500",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
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
