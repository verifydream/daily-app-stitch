import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Modal,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface QuickInputModalProps {
  visible: boolean;
  onClose: () => void;
}

const QuickInputModal: React.FC<QuickInputModalProps> = ({
  visible,
  onClose,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const actions = [
    {
      label: 'Catat Pengeluaran',
      icon: 'arrow-downward',
      color: themeColors.expense,
    },
    {
      label: 'Catat Pemasukan',
      icon: 'arrow-upward',
      color: themeColors.income,
    },
    { label: 'Catat Activity Log', icon: 'history', color: themeColors.primary },
    {
      label: 'Catat To-Do List',
      icon: 'edit-calendar',
      color: themeColors.primary,
    },
  ];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView intensity={10} style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          <View style={styles.content}>
            {actions.map((action, index) => (
              <View key={index} style={styles.actionRow}>
                <View
                  style={[
                    styles.labelContainer,
                    { backgroundColor: themeColors.surface },
                  ]}
                >
                  <Text
                    style={[
                      styles.actionLabel,
                      { color: themeColors.textPrimary },
                    ]}
                  >
                    {action.label}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    { backgroundColor: themeColors.surface },
                  ]}
                >
                  <MaterialIcons
                    name={action.icon}
                    size={24}
                    color={action.color}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: themeColors.primary }]}
            onPress={onClose}
          >
            <MaterialIcons name="close" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 120, // Space for the close button
    alignItems: 'flex-end',
    gap: 16,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  labelContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 88,
    right: 32,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuickInputModal;
