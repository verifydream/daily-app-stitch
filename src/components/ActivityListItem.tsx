import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface ActivityListItemProps {
  iconName: string;
  title: string;
  category: string;
  amount?: string;
  time: string;
  iconBackgroundColor: string;
  iconColor: string;
}

const ActivityListItem: React.FC<ActivityListItemProps> = ({
  iconName,
  title,
  category,
  amount,
  time,
  iconBackgroundColor,
  iconColor,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const amountColor = amount
    ? amount.startsWith('+')
      ? themeColors.income
      : themeColors.expense
    : themeColors.textPrimary;

  return (
    <View style={[styles.container, { backgroundColor: themeColors.surface }]}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <MaterialIcons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, { color: themeColors.textPrimary }]}>{title}</Text>
        <Text style={[styles.category, { color: themeColors.textSecondary }]}>{category}</Text>
      </View>
      <View style={styles.timeAmountContainer}>
        {amount ? (
          <Text style={[styles.amount, { color: amountColor }]}>{amount}</Text>
        ) : (
          <Text style={styles.amount}>-</Text>
        )}
        <Text style={[styles.time, { color: themeColors.textSecondary }]}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
  },
  timeAmountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
  },
});

export default ActivityListItem;
