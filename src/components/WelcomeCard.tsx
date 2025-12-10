import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WelcomeCardProps {
  title: string;
  description: string;
}

export default function WelcomeCard({ title, description }: WelcomeCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});
