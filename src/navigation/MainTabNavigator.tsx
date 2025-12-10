import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

// Screens
import DashboardScreen from '../screens/DashboardScreen';
import FinanceScreen from '../screens/FinanceScreen';
import ActivityLogScreen from '../screens/ActivityLogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QuickInputModal from '../screens/QuickInputModal';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFabPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={(props) => (
          <CustomTabBar {...props} onFabPress={handleFabPress} />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Finance" component={FinanceScreen} />
        <Tab.Screen name="Activity" component={ActivityLogScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <QuickInputModal visible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default MainTabNavigator;
