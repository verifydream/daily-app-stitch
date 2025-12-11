import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import OnboardingWelcomeScreen from '../screens/OnboardingWelcomeScreen';
import OnboardingFinanceScreen from '../screens/OnboardingFinanceScreen';
import OnboardingProductivityScreen from '../screens/OnboardingProductivityScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import MainTabNavigator from './MainTabNavigator';
import TodoListScreen from '../screens/TodoListScreen';
import ActivityDetailScreen from '../screens/ActivityDetailScreen';

export type RootStackParamList = {
  Login: undefined;
  OnboardingWelcome: undefined;
  OnboardingFinance: undefined;
  OnboardingProductivity: undefined;
  Registration: undefined;
  Main: undefined;
  TodoList: undefined;
  ActivityDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingWelcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OnboardingWelcome"
          component={OnboardingWelcomeScreen}
        />
        <Stack.Screen
          name="OnboardingFinance"
          component={OnboardingFinanceScreen}
        />
        <Stack.Screen
          name="OnboardingProductivity"
          component={OnboardingProductivityScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
