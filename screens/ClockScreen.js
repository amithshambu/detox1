// ClockScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppMenu from './AppMenu';
import AppSelectionModal from './AppSelectionModal';

const ClockScreen = () => {
  const [selectedApps, setSelectedApps] = useState(new Array(5).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleAppSelection = (index) => {
    setSelectedButtonIndex(index);
    setModalVisible(true);
  };

  const handleAppSelect = (selectedApp) => {
    const updatedApps = [...selectedApps];
    updatedApps[selectedButtonIndex] = selectedApp.appName;
    setSelectedApps(updatedApps);
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>Clock Display</Text>
      </View>
      <View style={styles.appsContainer}>
        {selectedApps.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={styles.appButton}
            onPress={() => handleAppSelection(index)}
          >
            <Text style={styles.appButtonText}>{app ? app : 'Select App'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <AppSelectionModal
        visible={modalVisible}
        onSelect={handleAppSelect}
        onClose={() => setModalVisible(false)}
      />
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
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  clockText: {
    color: 'white',
    fontSize: 24,
  },
  appsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  appButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  appButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ClockScreen;
