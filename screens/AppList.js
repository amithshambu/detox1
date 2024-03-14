// screens/AppList.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DEFAULT_APPS = ['App 1', 'App 2', 'App 3', 'App 4', 'App 5'];

const AppList = ({ onSelectApp }) => {
  return (
    <View style={styles.container}>
      {DEFAULT_APPS.map((appName, index) => (
        <TouchableOpacity key={index} style={styles.appItem} onPress={() => onSelectApp(appName)}>
          <Text style={styles.appName}>{appName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  appItem: {
    padding: 10,
  },
  appName: {
    color: 'white',
    fontSize: 20,
  },
});

export default AppList;
