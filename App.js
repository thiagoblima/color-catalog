import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ProgressViewIOS, Button, Alert, Dimensions, Platform } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get('window') 

  const onButtonPress = () => {
      Alert.alert(`${new Date().toLocaleTimeString()} button press.`)
  }

  return (
    <View style={styles.container}>
      <ProgressViewIOS progress={0.5} />
      <Text style={styles.texts}>Release My Book App!</Text>
      <Text style={styles.texts}>Write and find out!</Text>
      <ActivityIndicator size="large" color="#61DBfB" />
      <Button title="Click me" onPress={onButtonPress}/>
      <Text> Platform: {Platform.OS}</Text>
      <Text> height: {height} </Text>
      <Text> width: {width} </Text>
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
