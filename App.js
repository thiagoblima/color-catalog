import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Release My Book App!</Text>
      <Text style={styles.texts}>Write and find out!</Text>
      <ActivityIndicator size="large" color="#61DBfB" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    color: '#333DDD'
  },
  activity: {
    color: '#61DBfB'
  }
});
