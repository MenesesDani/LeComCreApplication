import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';

// Importa suas variáveis de cor
import { colors } from './constants/colors';
import { TopBar } from "./components/TopBar/Index";
import { HomeIcon, ExploreIcon, GamesIcon, ConquestIcon } from './components/icons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import GamesScreen from './screens/GamesScreen';
import ConquestScreen from './screens/ConquestScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar 
        name="Daniel" 
        energy={2} 
        onProfilePress={() => console.log('Perfil pressionado')}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }: {
            route: RouteProp<ParamListBase, string>;
          }): BottomTabNavigationOptions => ({
            tabBarIcon: ({ focused, size }: { focused: boolean; size: number }) => {
              
              const primaryColor = focused ? colors.brand.orange : colors.system.disable;
              const secondaryColor = focused ? colors.brand.yellow : colors.brand.blue;
              
              if (route.name === 'Home') {
                return <HomeIcon width={size} height={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />;
              } else if (route.name === 'Aprender') {
                return <ExploreIcon width={size} height={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />;
              } else if (route.name === 'Games') {
                return <GamesIcon width={size} height={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />;
              } else if (route.name === 'Conquistas') {
                return <ConquestIcon width={size} height={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />;
              }
            },
            tabBarLabel: ({ focused }) => {
              const color = focused ? '#333' : '#666';
              let label;
              if (route.name === 'Home') label = 'Home';
              else if (route.name === 'Aprender') label = 'Aprender';
              else if (route.name === 'Games') label = 'Games';
              else if (route.name === 'Conquistas') label = 'Conquistas';
              
              return <Text style={{ color, fontSize: 12, fontWeight: 'bold' }}>{label}</Text>;
            },
            headerShown: false,
            tabBarStyle: { 
              height: 70,
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            },
            tabBarItemStyle: {
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Aprender" component={ExploreScreen} />
          <Tab.Screen name="Games" component={GamesScreen} />
          <Tab.Screen name="Conquistas" component={ConquestScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});