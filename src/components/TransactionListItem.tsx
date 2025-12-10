import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface TransactionListItemProps {
  iconName: string;
  category: string;
  type: 'Pemasukan' | 'Pengeluaran';
  amount: string;
  date: string;
  iconBackgroundColor: string;
  iconColor: string;
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  iconName,
  category,
  type,
  amount,
  date,
  iconBackgroundColor,
  iconColor,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];
  const isIncome = type === 'Pemasukan';

  return (
    <View style={[styles.container, { backgroundColor: themeColors.surface }]}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <MaterialIcons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.category, { color: themeColors.textPrimary }]}>{category}</Text>
        <Text style={[styles.type, { color: themeColors.textSecondary }]}>{type}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.amount, { color: isIncome ? themeColors.income : themeColors.expense }]}>
          {isIncome ? '+' : '-'}{amount}
        </Text>
        <Text style={[styles.date, { color: themeColors.textSecondary }]}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
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
  category: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  },
});

export default TransactionListItem;
