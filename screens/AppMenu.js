// AppMenu.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the App Menu screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default AppMenu;
