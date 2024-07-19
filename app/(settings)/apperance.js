import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { IconButton } from 'react-native-paper';

const AppearanceSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the current appearance mode from storage or device settings.
    // For example, you can use AsyncStorage or react-native-appearance
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Save the new appearance mode to storage or device settings.
  };

  return (
    <View style={styles.container}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/settings")}/>
      <Text style={styles.title}>Appearance Settings</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginRight: 10,
  },
});

export default AppearanceSettings;