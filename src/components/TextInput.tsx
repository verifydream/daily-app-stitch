import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const iconColor = isDarkMode
    ? colors['text-secondary-dark']
    : colors['text-secondary-light'];

  return (
    <View style={styles.container}>
      {leftIcon && (
        <MaterialIcons
          name={leftIcon}
          size={24}
          color={iconColor}
          style={styles.leftIcon}
        />
      )}
      <RNTextInput
        style={[styles.input, leftIcon ? styles.withLeftIcon : {}]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor={iconColor}
        autoCapitalize="none"
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <MaterialIcons
            name={isPasswordVisible ? 'visibility' : 'visibility-off'}
            size={22}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
    },
    input: {
      width: '100%',
      height: 56,
      backgroundColor: isDarkMode ? colors['surface-dark'] : '#F3F4F6', // slate-100 for light
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      fontSize: 16,
      color: isDarkMode ? colors['text-primary-dark'] : colors['text-primary-light'],
      borderWidth: 1,
      borderColor: 'transparent',
    },
    withLeftIcon: {
      paddingLeft: 44,
    },
    leftIcon: {
      position: 'absolute',
      left: 12,
      top: 16,
      zIndex: 1,
    },
    rightIconContainer: {
      position: 'absolute',
      right: 12,
      top: 16,
      zIndex: 1,
    },
  });

export default TextInput;
