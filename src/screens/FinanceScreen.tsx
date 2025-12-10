import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { getThemeColors, colors } from '../styles/colors';
import TransactionListItem from '../components/TransactionListItem';

const FinanceScreen = () => {
  const colorScheme = useColorScheme();
  const themeColors = getThemeColors(colorScheme);

  const transactions: Array<{
    iconName: 'account-balance-wallet' | 'shopping-cart' | 'receipt-long' | 'restaurant';
    category: string;
    type: 'Pemasukan' | 'Pengeluaran';
    amount: string;
    date: string;
    iconBackgroundColor: string;
    iconColor: string;
  }> = [
      {
        iconName: 'account-balance-wallet',
        category: 'Gaji Bulanan',
        type: 'Pemasukan',
        amount: 'Rp 5.250.000',
        date: '1 Juli',
        iconBackgroundColor:
          colorScheme === 'light' ? '#dcfce7' : 'rgba(16, 185, 129, 0.2)',
        iconColor: colors.light.income,
      },
      {
        iconName: 'shopping-cart',
        category: 'Belanja Bulanan',
        type: 'Pengeluaran',
        amount: 'Rp 750.000',
        date: '2 Juli',
        iconBackgroundColor:
          colorScheme === 'light' ? '#fee2e2' : 'rgba(239, 68, 68, 0.2)',
        iconColor: colors.light.expense,
      },
      {
        iconName: 'receipt-long',
        category: 'Bayar Tagihan Listrik',
        type: 'Pengeluaran',
        amount: 'Rp 325.500',
        date: '5 Juli',
        iconBackgroundColor:
          colorScheme === 'light' ? '#dbeafe' : 'rgba(59, 130, 246, 0.2)',
        iconColor: '#3b82f6',
      },
      {
        iconName: 'restaurant',
        category: 'Makan Siang',
        type: 'Pengeluaran',
        amount: 'Rp 75.000',
        date: '6 Juli',
        iconBackgroundColor:
          colorScheme === 'light' ? '#ffedd5' : 'rgba(249, 115, 22, 0.2)',
        iconColor: '#f97316',
      },
    ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerText}>
              <Text
                style={[styles.title, { color: themeColors.textPrimary }]}
              >
                Keuangan
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  { color: themeColors.textSecondary },
                ]}
              >
                Ringkasan & Transaksi
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialIcons
                name="notifications"
                size={24}
                color={themeColors.textSecondary}
              />
              <View
                style={[
                  styles.notificationBadge,
                  {
                    backgroundColor: colors.light.expense,
                    borderColor: themeColors.background,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.balanceCard,
              { backgroundColor: themeColors.surface },
            ]}
          >
            <Text
              style={[
                styles.balanceLabel,
                { color: themeColors.textSecondary },
              ]}
            >
              Saldo Keseluruhan
            </Text>
            <Text
              style={[
                styles.balanceAmount,
                { color: themeColors.textPrimary },
              ]}
            >
              Rp 12.345.678
            </Text>
            <View style={styles.summaryContainer}>
              <View style={styles.summaryItem}>
                <View style={styles.summaryHeader}>
                  <MaterialIcons
                    name="arrow-upward"
                    size={16}
                    color={themeColors.income}
                  />
                  <Text
                    style={[
                      styles.summaryTitle,
                      { color: themeColors.income },
                    ]}
                  >
                    Pemasukan
                  </Text>
                </View>
                <Text
                  style={[
                    styles.summaryAmount,
                    { color: themeColors.textPrimary },
                  ]}
                >
                  Rp 5.250.000
                </Text>
              </View>
              <View style={styles.summaryItem}>
                <View style={styles.summaryHeader}>
                  <MaterialIcons
                    name="arrow-downward"
                    size={16}
                    color={themeColors.expense}
                  />
                  <Text
                    style={[
                      styles.summaryTitle,
                      { color: themeColors.expense },
                    ]}
                  >
                    Pengeluaran
                  </Text>
                </View>
                <Text
                  style={[
                    styles.summaryAmount,
                    { color: themeColors.textPrimary },
                  ]}
                >
                  Rp 1.875.000
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.transactionSection}>
            <View style={styles.transactionHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: themeColors.textPrimary },
                ]}
              >
                Transaksi Terbaru
              </Text>
              <TouchableOpacity style={styles.filterButton}>
                <Text
                  style={[styles.filterText, { color: themeColors.primary }]}
                >
                  Bulan Ini
                </Text>
                <MaterialIcons
                  name="expand-more"
                  size={20}
                  color={themeColors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.transactionList}>
              {transactions.map((item, index) => (
                <TransactionListItem
                  key={index}
                  iconName={item.iconName}
                  category={item.category}
                  type={item.type}
                  amount={item.amount}
                  date={item.date}
                  iconBackgroundColor={item.iconBackgroundColor}
                  iconColor={item.iconColor}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
  },
  balanceCard: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 32,
  },
  balanceLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  summaryItem: {
    flex: 1,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  summaryTitle: {
    fontSize: 14,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  transactionSection: {},
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  transactionList: {},
});

export default FinanceScreen;
