import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { router } from 'expo-router';

const SoundAndNotificationsScreen = () => {
  const { colors } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);



  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Save new notification settings to storage
    // ... Save to storage
  };

  return (
    <View style={styles.container}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/settings")}/>
      <Text style={[styles.title, { color: colors.text }]}>Sound & Notifications</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: colors.text }]}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      {/* Add more settings as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default SoundAndNotificationsScreen;
