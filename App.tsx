import React from "react";
import { View } from "react-native";
import { TopBar } from "./components/TopBar/Index";

export default function App() {
  return (
    <View>
      <TopBar 
        name="Usuário" 
        energy={100} 
        onProfilePress={() => console.log('Perfil pressionado')}
      />
    </View>
  );
}