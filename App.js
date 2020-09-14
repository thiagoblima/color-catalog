import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ProgressViewIOS, Button } from 'react-native';

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press.`)
  }

  return (
    <View style={styles.container}>
      <ProgressViewIOS progress={0.5} />
      <Text style={styles.texts}>Release My Book App!</Text>
      <Text style={styles.texts}>Write and find out!</Text>
      <ActivityIndicator size="large" color="#61DBfB" />
      <Button title="Click me" onPress={onButtonPress}/>
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
