import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  Linking,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import { colors } from '../styles/colors';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Registration'>;

const RegistrationScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = getStyles(isDarkMode);

  const handleTermsLink = () => {
    Linking.openURL('https://example.com/terms');
  };

  const handleLoginLink = () => navigation.navigate('Login');
  const handleBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={24}
            color={isDarkMode ? colors['text-primary-dark'] : colors['text-primary-light']}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Registrasi Akun Baru</Text>
          <Text style={styles.subtitle}>
            Buat akun untuk memulai perjalanan Anda.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={setName}
            leftIcon="person-outline"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            leftIcon="mail-outline"
          />
          <TextInput
            placeholder="Kata Sandi"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon="lock-outline"
          />
          <TextInput
            placeholder="Konfirmasi Kata Sandi"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            leftIcon="lock-person"
          />
        </View>

        <View style={styles.termsContainer}>
          <Checkbox
            checked={termsAccepted}
            onChange={setTermsAccepted}
            label={
              <Text style={styles.termsText}>
                Saya setuju dengan{' '}
                <Text style={styles.linkText} onPress={handleTermsLink}>
                  Syarat & Ketentuan
                </Text>{' '}
                yang berlaku.
              </Text>
            }
          />
        </View>

        <View style={styles.footer}>
          <Button title="Daftar" onPress={() => {}} disabled={!termsAccepted} />

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Atau daftar dengan</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="google" size={32} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons
                name="github"
                size={32}
                color={isDarkMode ? '#FFFFFF' : '#000000'}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.loginText}>
            Sudah punya akun?{' '}
            <Text style={styles.linkText} onPress={handleLoginLink}>
              Masuk di sini
            </Text>
          </Text>
        </View>
      </ScrollView>
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
    },
    contentContainer: {
      flexGrow: 1,
      padding: 24,
    },
    backButton: {
      marginBottom: 16,
    },
    header: {
      marginBottom: 32,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDarkMode ? colors['text-primary-dark'] : colors['text-primary-light'],
      letterSpacing: -0.5,
    },
    subtitle: {
      marginTop: 8,
      fontSize: 16,
      color: isDarkMode
        ? colors['text-secondary-dark']
        : colors['text-secondary-light'],
    },
    form: {
      width: '100%',
      gap: 16,
    },
    termsContainer: {
      marginTop: 24,
    },
    termsText: {
      flex: 1,
      fontSize: 14,
      color: isDarkMode
        ? colors['text-secondary-dark']
        : colors['text-secondary-light'],
      lineHeight: 20,
    },
    linkText: {
      color: colors.primary,
      fontWeight: '600',
    },
    footer: {
      marginTop: 'auto',
      paddingTop: 32,
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: isDarkMode ? colors['border-dark'] : colors['border-light'],
    },
    dividerText: {
      marginHorizontal: 16,
      fontSize: 14,
      color: isDarkMode
        ? colors['text-secondary-dark']
        : colors['text-secondary-light'],
    },
    socialLoginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
      marginTop: 24,
    },
    socialButton: {
      width: 64,
      height: 64,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: isDarkMode ? colors['border-dark'] : colors['border-light'],
      backgroundColor: isDarkMode ? colors['surface-dark'] : colors['surface-light'],
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      marginTop: 24,
      textAlign: 'center',
      fontSize: 14,
      color: isDarkMode
        ? colors['text-secondary-dark']
        : colors['text-secondary-light'],
    },
  });

export default RegistrationScreen;
