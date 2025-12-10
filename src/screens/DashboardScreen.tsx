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
import { useNavigation } from '@react-navigation/native';
import { getThemeColors, colors } from '../styles/colors';
import ActivityListItem from '../components/ActivityListItem';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeColors = getThemeColors(colorScheme);

  const recentActivities = [
    {
      iconName: 'shopping-cart',
      title: 'Belanja Bulanan',
      category: 'Pengeluaran',
      amount: '-Rp 750.000',
      time: '14:30',
      iconBackgroundColor:
        colorScheme === 'light' ? '#fee2e2' : 'rgba(239, 68, 68, 0.2)',
      iconColor: colors.light.expense,
    },
    {
      iconName: 'task-alt',
      title: 'Selesaikan Laporan',
      category: 'Tugas Selesai',
      amount: undefined,
      time: '11:15',
      iconBackgroundColor:
        colorScheme === 'light' ? '#ffedd5' : 'rgba(249, 115, 22, 0.2)',
      iconColor: colors.light.secondary,
    },
    {
      iconName: 'account-balance-wallet',
      title: 'Gaji Bulanan',
      category: 'Pemasukan',
      amount: '+Rp 5.250.000',
      time: '09:00',
      iconBackgroundColor:
        colorScheme === 'light' ? '#dcfce7' : 'rgba(16, 185, 129, 0.2)',
      iconColor: colors.light.income,
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text
                style={[
                  styles.greeting,
                  { color: themeColors.textSecondary },
                ]}
              >
                Selamat Pagi,
              </Text>
              <Text
                style={[styles.userName, { color: themeColors.textPrimary }]}
              >
                User!
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
              { backgroundColor: themeColors.primary },
            ]}
          >
            <Text style={styles.balanceLabel}>Total Saldo Bersih</Text>
            <Text style={styles.balanceAmount}>Rp 12.345.678</Text>
          </View>

          <View style={styles.summaryGrid}>
            <View
              style={[
                styles.summaryCard,
                { backgroundColor: themeColors.surface },
              ]}
            >
              <View style={styles.summaryHeader}>
                <MaterialIcons
                  name="arrow-upward"
                  size={16}
                  color={themeColors.income}
                />
                <Text
                  style={[styles.summaryTitle, { color: themeColors.income }]}
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
                Rp 1.250K
              </Text>
              <Text
                style={[
                  styles.summaryPeriod,
                  { color: themeColors.textSecondary },
                ]}
              >
                Minggu ini
              </Text>
            </View>
            <View
              style={[
                styles.summaryCard,
                { backgroundColor: themeColors.surface },
              ]}
            >
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
                Rp 875K
              </Text>
              <Text
                style={[
                  styles.summaryPeriod,
                  { color: themeColors.textSecondary },
                ]}
              >
                Minggu ini
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.todoCard,
              { backgroundColor: themeColors.surface },
            ]}
            onPress={() => navigation.navigate('TodoList')}
          >
            <View>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: themeColors.textPrimary },
                ]}
              >
                To-Do List
              </Text>
              <Text
                style={[
                  styles.todoSubtitle,
                  { color: themeColors.textSecondary },
                ]}
              >
                Tugas yang belum selesai
              </Text>
            </View>
            <View
              style={[
                styles.todoBadge,
                {
                  backgroundColor:
                    colorScheme === 'light'
                      ? '#ffedd5'
                      : 'rgba(249, 115, 22, 0.2)',
                },
              ]}
            >
              <Text
                style={[
                  styles.todoCount,
                  { color: themeColors.statusPending },
                ]}
              >
                5
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.activitySection}>
            <View style={styles.activityHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: themeColors.textPrimary },
                ]}
              >
                Aktivitas Terbaru
              </Text>
              <TouchableOpacity>
                <Text style={[styles.viewAll, { color: themeColors.primary }]}>
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activityList}>
              {recentActivities.map((item, index) => (
                <ActivityListItem
                  key={index}
                  iconName={item.iconName}
                  title={item.title}
                  category={item.category}
                  amount={item.amount}
                  time={item.time}
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
    marginBottom: 24,
  },
  greeting: {
    fontSize: 14,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
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
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  summaryGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  summaryPeriod: {
    fontSize: 12,
    marginTop: 2,
  },
  todoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },
  todoSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  todoBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoCount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activitySection: {
    marginTop: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '600',
  },
  activityList: {
    gap: 12,
  },
});

export default DashboardScreen;
