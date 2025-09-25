import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';

import { colors } from './constants/colors';
import { TopBar } from "./components/TopBar/Index";
import { HomeIcon, ExploreIcon, GamesIcon, ConquestIcon } from './components/icons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import GamesScreen from './screens/GamesScreen';
import ConquestScreen from './screens/ConquestScreen';

const Tab = createBottomTabNavigator();

// Componente wrapper para incluir a TopBar em todas as telas
function ScreenWithTopBar({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.screenContainer}>
      <TopBar 
        name="Daniel" 
        energy={2} 
        onProfilePress={() => console.log('Perfil pressionado')}
      />
      <View style={styles.screenContent}>
        {children}
      </View>
    </View>
  );
}

// Componentes das telas com TopBar
function HomeWithTopBar() {
  return (
    <ScreenWithTopBar>
      <HomeScreen />
    </ScreenWithTopBar>
  );
}

function ExploreWithTopBar() {
  return (
    <ScreenWithTopBar>
      <ExploreScreen />
    </ScreenWithTopBar>
  );
}

function GamesWithTopBar() {
  return (
    <ScreenWithTopBar>
      <GamesScreen />
    </ScreenWithTopBar>
  );
}

function ConquestWithTopBar() {
  return (
    <ScreenWithTopBar>
      <ConquestScreen />
    </ScreenWithTopBar>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }: { route: RouteProp<ParamListBase, string> }): BottomTabNavigationOptions => ({
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
              const color = focused ? colors.text.principal : colors.text.secundary;
              let label;
              if (route.name === 'Home') label = 'Home';
              else if (route.name === 'Aprender') label = 'Aprender';
              else if (route.name === 'Games') label = 'Games';
              else if (route.name === 'Conquistas') label = 'Conquistas';
              
              return <Text style={{ color, fontSize: 12, fontWeight: 'bold' }}>{label}</Text>;
            },
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: colors.system.white,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: 'hidden',
              paddingTop: 20,
              paddingBottom: 10,
              paddingHorizontal: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.05,
              shadowRadius: 5,
              elevation: 5,
              height: 90,
            },
            tabBarItemStyle: {
              alignItems: 'center',
              justifyContent: 'center',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeWithTopBar} />
          <Tab.Screen name="Aprender" component={ExploreWithTopBar} />
          <Tab.Screen name="Games" component={GamesWithTopBar} />
          <Tab.Screen name="Conquistas" component={ConquestWithTopBar} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
  },
});