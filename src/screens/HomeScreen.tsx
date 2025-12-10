import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WelcomeCard from '../components/WelcomeCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily App Stitch</Text>
        <Text style={styles.subtitle}>React Native Expo Go Starter Kit</Text>
      </View>
      
      <WelcomeCard 
        title="Welcome to Your Starter Kit!"
        description="This is a React Native Expo Go starter template. Start building your app by modifying App.tsx and the files in the src directory."
      />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Getting Started</Text>
        <Text style={styles.text}>
          • Run 'npm start' to start the development server{'\n'}
          • Scan the QR code with Expo Go app on your phone{'\n'}
          • Edit files to see live reload in action{'\n'}
          • Add new screens in src/screens{'\n'}
          • Create reusable components in src/components
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features Included</Text>
        <Text style={styles.text}>
          ✓ TypeScript configuration{'\n'}
          ✓ Safe area context for notch support{'\n'}
          ✓ Component-based architecture{'\n'}
          ✓ Ready for Expo Go development{'\n'}
          ✓ Organized folder structure
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});
