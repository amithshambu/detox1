// screens/ClockScreen.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import AppList from './AppList';

// Function to fetch current time
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

const ClockScreen = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAppSelect = (appName) => {
    // Handle app selection here
    console.log('Selected app:', appName);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AppList onSelectApp={handleAppSelect} />
      <Text style={styles.clock}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clock: {
    color: 'white',
    fontSize: 48,
  },
});

export default ClockScreen;
