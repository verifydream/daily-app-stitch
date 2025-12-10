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
import { colors } from '../styles/colors';
import ActivityListItem from '../components/ActivityListItem';
import Header from '../components/Header';

const ActivityLogScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const activityGroups = [
    {
      date: 'Hari Ini, 23 Oktober',
      activities: [
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
      ],
    },
    {
      date: 'Kemarin, 22 Oktober',
      activities: [
        {
          iconName: 'commute',
          title: 'Transportasi ke Kantor',
          category: 'Pengeluaran',
          amount: '-Rp 25.000',
          time: '08:10',
          iconBackgroundColor:
            colorScheme === 'light' ? themeColors.background : 'rgba(59, 130, 246, 0.2)',
          iconColor: themeColors.primary,
        },
        {
          iconName: 'task-alt',
          title: 'Email Follow Up Klien',
          category: 'Tugas Selesai',
          amount: undefined,
          time: '16:45',
          iconBackgroundColor:
            colorScheme === 'light' ? '#ffedd5' : 'rgba(249, 115, 22, 0.2)',
          iconColor: colors.light.secondary,
        },
      ],
    },
    {
      date: 'Jumat, 20 Oktober',
      activities: [
        {
          iconName: 'restaurant',
          title: 'Makan Siang',
          category: 'Pengeluaran',
          amount: '-Rp 55.000',
          time: '12:30',
          iconBackgroundColor:
            colorScheme === 'light' ? themeColors.background : 'rgba(234, 179, 8, 0.2)',
          iconColor: themeColors.secondary,
        },
      ],
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <Header
        title="Daftar Activity Log"
        onBackPress={() => {
          // TODO: Implement navigation
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                {
                  backgroundColor: themeColors.surface,
                  borderColor:
                    colorScheme === 'light' ? '#e2e8f0' : '#475569',
                },
              ]}
            >
              <MaterialIcons
                name="filter-list"
                size={16}
                color={themeColors.textSecondary}
              />
              <Text
                style={[
                  styles.filterText,
                  { color: themeColors.textPrimary },
                ]}
              >
                Kategori
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                {
                  backgroundColor: themeColors.surface,
                  borderColor:
                    colorScheme === 'light' ? '#e2e8f0' : '#475569',
                },
              ]}
            >
              <MaterialIcons
                name="calendar-today"
                size={16}
                color={themeColors.textSecondary}
              />
              <Text
                style={[
                  styles.filterText,
                  { color: themeColors.textPrimary },
                ]}
              >
                Periode
              </Text>
            </TouchableOpacity>
          </View>

          {activityGroups.map((group, index) => (
            <View key={index} style={styles.activityGroup}>
              <Text
                style={[
                  styles.groupTitle,
                  { color: themeColors.textPrimary },
                ]}
              >
                {group.date}
              </Text>
              <View style={styles.activityList}>
                {group.activities.map((item, itemIndex) => (
                  <ActivityListItem
                    key={itemIndex}
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
          ))}
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
    paddingHorizontal: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 16,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 8,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activityGroup: {
    marginTop: 16,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  activityList: {
    gap: 12,
  },
});

export default ActivityLogScreen;
