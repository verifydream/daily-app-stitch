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
import Header from '../components/Header';

const ActivityDetailScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const RightComponent = () => (
    <View style={styles.headerActions}>
      <TouchableOpacity>
        <MaterialIcons
          name="edit"
          size={24}
          color={themeColors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name="delete-outline"
          size={24}
          color={themeColors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <Header
        title="Detail Aktivitas"
        onBackPress={() => {
          // TODO: Implement navigation
        }}
        rightComponent={<RightComponent />}
      />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.titleSection}>
            <Text
              style={[
                styles.mainTitle,
                { color: themeColors.textPrimary },
              ]}
            >
              Mendesain Ulang Halaman Login
            </Text>
            <Text
              style={[
                styles.subtitle,
                { color: themeColors.textSecondary },
              ]}
            >
              Proyek Aplikasi Mobile
            </Text>
          </View>

          <View
            style={[
              styles.detailsCard,
              { backgroundColor: themeColors.surface },
            ]}
          >
            <View style={styles.detailItem}>
              <MaterialIcons
                name="description"
                size={24}
                color={themeColors.primary}
                style={styles.detailIcon}
              />
              <View style={styles.detailTextContainer}>
                <Text
                  style={[
                    styles.detailLabel,
                    { color: themeColors.textSecondary },
                  ]}
                >
                  Deskripsi
                </Text>
                <Text
                  style={[
                    styles.detailValue,
                    { color: themeColors.textPrimary },
                  ]}
                >
                  Melakukan perancangan ulang antarmuka pengguna (UI) dan
                  pengalaman pengguna (UX) untuk halaman login aplikasi Daily
                  Tracker.
                </Text>
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.detailItem}>
              <MaterialIcons
                name="category"
                size={24}
                color={themeColors.primary}
                style={styles.detailIcon}
              />
              <View style={styles.detailTextContainer}>
                <Text
                  style={[
                    styles.detailLabel,
                    { color: themeColors.textSecondary },
                  ]}
                >
                  Kategori
                </Text>
                <Text
                  style={[
                    styles.detailValue,
                    { color: themeColors.textPrimary },
                  ]}
                >
                  Pekerjaan
                </Text>
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.detailItem}>
              <MaterialIcons
                name="calendar-today"
                size={24}
                color={themeColors.primary}
                style={styles.detailIcon}
              />
              <View style={styles.detailTextContainer}>
                <Text
                  style={[
                    styles.detailLabel,
                    { color: themeColors.textSecondary },
                  ]}
                >
                  Tanggal & Waktu
                </Text>
                <Text
                  style={[
                    styles.detailValue,
                    { color: themeColors.textPrimary },
                  ]}
                >
                  10 Juli 2024, 09:30 - 11:45
                </Text>
              </View>
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
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    padding: 24,
  },
  titleSection: {
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
  },
  detailsCard: {
    borderRadius: 16,
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  detailIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    lineHeight: 24,
  },
  separator: {
    height: 1,
    backgroundColor: themeColors.background,
    marginVertical: 8,
  },
});

export default ActivityDetailScreen;
