// AppList.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, PermissionsAndroid, Platform } from 'react-native';

const AppList = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchInstalledApps = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.GET_PACKAGE_SIZE,
            {
              title: 'App List Permission',
              message: 'This app needs access to your installed apps.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const installedApps = await Linking.getInstalledApps();
            setApps(installedApps);
          } else {
            console.log('Permission denied');
          }
        } else {
          const installedApps = await Linking.getInstalledApps();
          setApps(installedApps);
        }
      } catch (error) {
        console.error('Error fetching installed apps:', error);
      }
    };

    fetchInstalledApps();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.appListContainer}>
        {apps.map((app, index) => (
          <View key={index} style={styles.appItem}>
            <Text style={styles.appName}>{app.appName}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  appListContainer: {
    paddingVertical: 20,
  },
  appItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 20,
  },
});

export default AppList;
