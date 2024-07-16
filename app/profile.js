import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Profile = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
})

export default Profile