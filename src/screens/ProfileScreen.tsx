import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

const ProfileScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = colors[colorScheme];

  const menuItems = [
    {
      icon: 'person-outline',
      label: 'Edit Profil',
      color: themeColors.primary,
    },
    {
      icon: 'settings',
      label: 'Pengaturan Aplikasi',
      color: themeColors.primary,
    },
    {
      icon: 'category',
      label: 'Manajemen Kategori',
      color: themeColors.primary,
    },
    {
      icon: 'help-outline',
      label: 'Bantuan & Dukungan',
      color: themeColors.primary,
    },
    { icon: 'logout', label: 'Keluar', color: themeColors.danger },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: themeColors.textPrimary }]}>
            Profil Pengguna
          </Text>

          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/a/ACg8ocK_gC5Y-0-3-gC5Y-0-3-gC5Y-0-3-gC5Y-0-3-gC5Y-0-3=s96-c',
                }}
                style={styles.avatar}
              />
              <TouchableOpacity
                style={[
                  styles.editButton,
                  { backgroundColor: themeColors.primary },
                ]}
              >
                <MaterialIcons name="edit" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.userName,
                { color: themeColors.textPrimary },
              ]}
            >
              Budi Santoso
            </Text>
            <Text
              style={[
                styles.userEmail,
                { color: themeColors.textSecondary },
              ]}
            >
              budi.santoso@example.com
            </Text>
          </View>

          <View style={styles.menuSection}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  { backgroundColor: themeColors.surface },
                ]}
              >
                <MaterialIcons
                  name={item.icon}
                  size={24}
                  color={item.color}
                  style={styles.menuIcon}
                />
                <Text
                  style={[
                    styles.menuLabel,
                    {
                      color:
                        item.label === 'Keluar'
                          ? themeColors.danger
                          : themeColors.textPrimary,
                    },
                  ]}
                >
                  {item.label}
                </Text>
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color={themeColors.textSecondary}
                />
              </TouchableOpacity>
            ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
  },
  menuSection: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileScreen;
