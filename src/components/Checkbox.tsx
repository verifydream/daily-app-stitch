import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface CheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onChange(!checked)}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <MaterialIcons name="check" size={14} color="#FFFFFF" />}
      </View>
      <View style={styles.labelContainer}>{label}</View>
    </TouchableOpacity>
  );
};

const getStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: isDarkMode ? colors['border-dark'] : colors['border-light'],
    backgroundColor: isDarkMode ? colors['surface-dark'] : '#F3F4F6', // slate-100
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  labelContainer: {
    marginLeft: 12,
    flex: 1,
  },
});

export default Checkbox;
