import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  useColorScheme,
} from 'react-native';
import { colors } from '../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'transparent';
  loading?: boolean;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  rightIcon,
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          button: styles.primaryButton,
          text: styles.primaryButtonText,
        };
      case 'secondary':
        return {
          button: isDarkMode ? styles.secondaryButtonDark : styles.secondaryButtonLight,
          text: isDarkMode ? styles.secondaryButtonTextDark : styles.secondaryButtonTextLight,
        };
      case 'transparent':
        return {
          button: styles.transparentButton,
          text: isDarkMode ? styles.transparentButtonTextDark : styles.transparentButtonTextLight,
        };
      default:
        return {
          button: styles.primaryButton,
          text: styles.primaryButtonText,
        };
    }
  };

  const { button: buttonVariantStyle, text: textVariantStyle } = getButtonStyles();

  return (
    <TouchableOpacity
      style={[styles.button, buttonVariantStyle, (disabled || loading) && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#FFFFFF' : colors.primary}
        />
      ) : (
        <View style={styles.content}>
          <Text style={textVariantStyle}>{title}</Text>
          {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  secondaryButtonLight: {
    backgroundColor: colors['surface-light'],
    borderWidth: 1,
    borderColor: colors['border-light'],
  },
  secondaryButtonDark: {
    backgroundColor: colors['surface-dark'],
    borderWidth: 1,
    borderColor: colors['border-dark'],
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonTextLight: {
    color: colors['text-primary-light'],
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonTextDark: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  transparentButtonTextLight: {
    color: colors['text-secondary-light'],
    fontSize: 18,
    fontWeight: '500',
  },
  transparentButtonTextDark: {
    color: colors['text-secondary-dark'],
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
