import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getThemeColors } from '../styles/colors';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  rightComponent,
}) => {
  const colorScheme = useColorScheme();
  const themeColors = getThemeColors(colorScheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeColors.background },
      ]}
    >
      <View style={styles.leftContainer}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <MaterialIcons
              name="arrow-back-ios-new"
              size={24}
              color={themeColors.textPrimary}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: themeColors.textPrimary }]}>
          {title}
        </Text>
      </View>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 60,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
});

export default Header;
