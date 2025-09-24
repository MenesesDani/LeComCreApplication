import React from "react";
import { View } from "react-native";
import { TopBar } from "./components/TopBar/Index";

export default function App() {
  return (
    <View>
      <TopBar 
        name="Daniel" 
        energy={2} 
        onProfilePress={() => console.log('Perfil pressionado')}
      />
    </View>
  );
}