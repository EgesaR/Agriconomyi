import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { router } from 'expo-router';

const LanguageAndSpeechScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('English');
  const [speechEnabled, setSpeechEnabled] = useState(false);

  useEffect(() => {
    // Load user's preferred language and speech settings from storage
    // ...
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Save the new language preference to storage
    // ...
  };

  const handleSpeechToggle = () => {
    setSpeechEnabled(!speechEnabled);
    // Save the new speech setting to storage
    // ...
  };

  return (
    <View style={styles.container}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/settings")}/>
      <Text style={styles.title}>Language & Speech</Text>
      <View style={styles.option}>
        <Text style={styles.optionTitle}>Language</Text>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageChange('English')}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageChange('Spanish')}
        >
          <Text style={styles.buttonText}>Español</Text>
        </TouchableOpacity>
        {/* Add more language options here */}
      </View>
      <View style={styles.option}>
        <Text style={styles.optionTitle}>Speech Output</Text>
        <Switch
          value={speechEnabled}
          onValueChange={handleSpeechToggle}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={speechEnabled ? '#f5dd4b' : '#f4f3f4'}
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
  option: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  languageButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
});

export default LanguageAndSpeechScreen;