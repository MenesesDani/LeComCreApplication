import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BetaMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VERSÃO BETA DA APLICAÇÃO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AFD8E2",
    padding: 10,
    borderRadius: 12,
    width: "88%",
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    color: "#484560",
    fontSize: 12,
    fontFamily: "Onest",
    textAlign: "center",
    fontWeight: "700",
  },
});

export default BetaMessage;
