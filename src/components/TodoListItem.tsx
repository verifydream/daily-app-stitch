import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

type TodoStatus = 'Terlambat' | 'Pending' | 'Selesai';

interface TodoListItemProps {
  status: TodoStatus;
  category: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  status,
  category,
  title,
  dueDate,
  isCompleted,
  onToggleComplete,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const statusColors = {
    Terlambat: {
      border: themeColors.statusOverdue,
      bg: colorScheme === 'light' ? '#fee2e2' : 'rgba(239, 68, 68, 0.2)',
      text: themeColors.statusOverdue,
    },
    Pending: {
      border: themeColors.statusPending,
      bg: colorScheme === 'light' ? '#ffedd5' : 'rgba(249, 115, 22, 0.2)',
      text: themeColors.statusPending,
    },
    Selesai: {
      border: themeColors.statusCompleted,
      bg: colorScheme === 'light' ? '#dcfce7' : 'rgba(16, 185, 129, 0.2)',
      text: themeColors.statusCompleted,
    },
  };

  const currentStatus = statusColors[status];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeColors.surface,
          borderLeftColor: currentStatus.border,
          opacity: isCompleted ? 0.6 : 1,
        },
      ]}
    >
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <View style={[styles.statusBadge, { backgroundColor: currentStatus.bg }]}>
            <Text style={[styles.statusText, { color: currentStatus.text }]}>{status}</Text>
          </View>
          <Text style={[styles.category, { color: themeColors.textSecondary }]}>{category}</Text>
        </View>
        <Text
          style={[
            styles.title,
            {
              color: themeColors.textPrimary,
              textDecorationLine: isCompleted ? 'line-through' : 'none',
            },
          ]}
        >
          {title}
        </Text>
        <View style={styles.dueDateContainer}>
          <MaterialIcons name="event" size={16} color={status === 'Terlambat' ? currentStatus.text : themeColors.textSecondary} />
          <Text
            style={[
              styles.dueDate,
              { color: status === 'Terlambat' ? currentStatus.text : themeColors.textSecondary },
            ]}
          >
            {dueDate}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onToggleComplete} style={styles.checkboxContainer}>
        <View
          style={[
            styles.checkbox,
            {
              borderColor: isCompleted ? themeColors.statusCompleted : themeColors.textSecondary,
              backgroundColor: isCompleted ? themeColors.statusCompleted : 'transparent',
            },
          ]}
        >
          {isCompleted && <MaterialIcons name="check" size={16} color="#fff" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    marginBottom: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  category: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dueDate: {
    fontSize: 14,
    marginLeft: 4,
  },
  checkboxContainer: {
    marginLeft: 16,
    padding: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoListItem;
