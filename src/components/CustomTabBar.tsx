import React from 'react';
import { View, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/colors';

interface CustomTabBarProps extends BottomTabBarProps {
  onFabPress: () => void;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  onFabPress,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  return (
    <View style={styles.container}>
      <View
        style={[styles.tabBar, { backgroundColor: themeColors.surface }]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName =
            route.name === 'Dashboard'
              ? 'dashboard'
              : route.name === 'Finance'
              ? 'account-balance'
              : route.name === 'Activity'
              ? 'checklist'
              : 'person-outline';

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabItem}
            >
              <MaterialIcons
                name={iconName}
                size={24}
                color={
                  isFocused ? themeColors.primary : themeColors.textSecondary
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: themeColors.primary }]}
        onPress={onFabPress}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderRadius: 30,
    marginHorizontal: 24,
    marginBottom: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    top: -20,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

export default CustomTabBar;
