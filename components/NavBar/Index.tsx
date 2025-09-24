import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ExploreIcon, ConquestIcon, GamesIcon, HomeIcon } from '../icons';

import { styles } from './styles';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const getIconColor = (tabName: string) => {
    if (tabName === 'Home') {
      return activeTab === tabName ? '#FB8500' : '#AFD8E2';
    } else {
      return activeTab === tabName ? '#219EBC' : '#AFD8E2';
    }
  };

  const getTextColor = (tabName: string) => {
    return activeTab === tabName ? '#333' : '#666';
  };

  const renderTab = (tabName: string, icon: React.ReactNode, label: string) => {
    const isActive = activeTab === tabName;
    return (
      <TouchableOpacity
        key={tabName}
        style={styles.tab}
        onPress={() => setActiveTab(tabName)}
      >
        {isActive && <View style={styles.activeIndicator} />}
        {icon}
        <Text style={[styles.tabText, { color: getTextColor(tabName) }]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTab('Home', <HomeIcon width={30} height={30} color={getIconColor('Home')} />, 'Home')}
      {renderTab('Aprender', <ExploreIcon width={30} height={30} color={getIconColor('Aprender')} />, 'Aprender')}
      {renderTab('Games', <GamesIcon width={30} height={30} color={getIconColor('Games')} />, 'Games')}
      {renderTab('Conquistas', <ConquestIcon width={30} height={30} color={getIconColor('Conquistas')} />, 'Conquistas')}
    </View>
  );
};

export default NavBar;