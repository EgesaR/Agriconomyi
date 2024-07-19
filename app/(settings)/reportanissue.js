import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';

const ReportAnIssue = () => {
  const [issue, setIssue] = useState('');

  const handleReport = () => {
    if (issue.trim() === '') {
      Alert.alert('Error', 'Please enter an issue description.');
      return;
    }

    // Send the issue to your backend or API for processing
    // Replace this with your actual API call
    fetch('https://your-api-endpoint.com/report-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ issue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert('Success', 'Issue reported successfully!');
        setIssue(''); // Clear the input field
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to report issue. Please try again later.');
        console.error('Error reporting issue:', error);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/settings")}/>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Report an Issue</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15 }}
        placeholder="Describe the issue"
        multiline={true}
        numberOfLines={4}
        value={issue}
        onChangeText={setIssue}
      />
      <Button title="Report Issue" onPress={handleReport} />
    </View>
  );
};

export default ReportAnIssue;