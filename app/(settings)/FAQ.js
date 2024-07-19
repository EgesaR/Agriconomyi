import { router } from 'expo-router';
import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton, List } from 'react-native-paper';

const FAQ = () => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleExpanded = () => {
    setActiveSections(
      activeSections.length === 0 ? [0] : [],
    );
  };

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  const SECTIONS = [
    {
      title: 'What is this app about?',
      content: 'This app is designed to help you manage your daily tasks and stay organized.',
    },
    {
      title: 'How do I use this app?',
      content: 'You can add tasks, set deadlines, and categorize them for easy tracking.',
    },
    {
      title: 'Is this app free?',
      content: 'Yes, this app is completely free to use.',
    },
  ];

  return (
    <View style={styles.container}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/settings")}/>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text style={styles.toggle}>
          {activeSections.length === 0 ? 'Show All' : 'Hide All'}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <List.Accordion
          activeSections={activeSections}
          sections={SECTIONS}
          touchableComponent={TouchableOpacity}
          expandMultiple={false}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
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
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  contentText: {
    fontSize: 14,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  toggle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FAQ;
