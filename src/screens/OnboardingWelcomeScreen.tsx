import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../components/Button';
import { colors } from '../styles/colors';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingWelcome'>;

const OnboardingWelcomeScreen = ({ navigation }: Props) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const handleRegister = () => navigation.navigate('OnboardingFinance');
  const handleLogin = () => navigation.navigate('Login');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.iconWrapper}>
          <LinearGradient
            colors={
              isDarkMode
                ? ['#14b8a6', '#10968A']
                : [colors.primary, '#2dd4bf']
            }
            style={styles.gradient}
          >
            <MaterialCommunityIcons
              name="track-changes"
              size={80}
              color="#FFFFFF"
            />
          </LinearGradient>
        </View>
        <Text style={styles.title}>
          Lacak Keuangan & Produktivitas Anda
        </Text>
        <Text style={styles.description}>
          Capai tujuan finansial dan pribadi Anda dengan lebih mudah setiap
          hari.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Daftar Akun Baru"
          onPress={handleRegister}
          variant="primary"
        />
        <View style={{ height: 16 }} />
        <Button title="Login" onPress={handleLogin} variant="secondary" />
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? colors['background-dark']
        : colors['background-light'],
      justifyContent: 'space-between',
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
      textAlign: 'center',
    },
    iconWrapper: {
      width: 160,
      height: 160,
      borderRadius: 32,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
      marginBottom: 32,
      transform: [{ rotate: '-12deg' }],
    },
    gradient: {
      flex: 1,
      borderRadius: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDarkMode ? colors['text-primary-dark'] : colors['text-primary-light'],
      textAlign: 'center',
      letterSpacing: -0.5,
    },
    description: {
      marginTop: 16,
      fontSize: 16,
      color: isDarkMode
        ? colors['text-secondary-dark']
        : colors['text-secondary-light'],
      textAlign: 'center',
      lineHeight: 24,
      maxWidth: 300,
    },
    footer: {
      padding: 32,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 32,
    },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: isDarkMode ? '#475569' : '#CBD5E1', // slate-600 or slate-300
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: colors.primary,
    },
  });

export default OnboardingWelcomeScreen;
