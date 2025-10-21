import React from "react";
import { View, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowNextIcon } from '../../components/icons';
import { colors } from "../../constants/colors";
import styles from "./styles";

type Props = {
  title: string;
  onMenuPress?: (e?: GestureResponderEvent) => void;
  // opcional: se quiser controlar comportamento do botão de voltar externamente
  onBackPress?: (e?: GestureResponderEvent) => void;
};

const TopBarConstruction: React.FC<Props> = ({ title, onMenuPress, onBackPress }) => {
  const navigation = useNavigation<any>();

  const handleBack = (e?: GestureResponderEvent) => {
    if (onBackPress) return onBackPress(e);
    // comportamento padrão: volta pra tela 'Home'
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.sideButton}
        onPress={handleBack}
        accessibilityLabel="Voltar para Home"
      >
        <View style={styles.arrowWrapper}>
          <ArrowNextIcon width={18} height={18} primaryColor={colors.text.secundary } style={{ transform: [{ rotate: "180deg" }] }} />
        </View>
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.sideButton}
        onPress={onMenuPress}
        accessibilityLabel="Abrir menu"
      >
        {/* ícone de 3 bolinhas simples */}
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopBarConstruction;
