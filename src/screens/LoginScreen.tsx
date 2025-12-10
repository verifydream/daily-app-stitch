import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { colors } from '../styles/colors';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = getStyles(isDarkMode);

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen (not implemented)
  };

  const handleLogin = () => {
    // Implement login logic
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="trending-up"
            size={48}
            color={colors.primary}
          />
        </View>
        <Text style={styles.title}>Login Akun</Text>
        <Text style={styles.subtitle}>Selamat datang kembali!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email atau Username"
          value={email}
          onChangeText={setEmail}
          leftIcon="email"
        />
        <View style={{ height: 16 }} />
        <TextInput
          placeholder="Kata Sandi"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          leftIcon="lock"
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={handleLogin} />
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>atau login dengan</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons
            name="github"
            size={24}
            color={isDarkMode ? '#FFFFFF' : '#000000'}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
      justifyContent: 'center',
      padding: 24,
    },
    header: {
      alignItems: 'center',
      marginBottom: 40,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: isDarkMode
        ? 'rgba(20, 184, 166, 0.2)'
        : 'rgba(20, 184, 166, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
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
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginVertical: 16,
    },
    forgotPasswordText: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.primary,
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 32,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: isDarkMode ? colors['border-dark'] : colors['border-light'],
    },
    dividerText: {
      marginHorizontal: 12,
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
      width: 60,
      height: 50,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? colors['border-dark'] : colors['border-light'],
      backgroundColor: isDarkMode ? colors['surface-dark'] : colors['surface-light'],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default LoginScreen;
