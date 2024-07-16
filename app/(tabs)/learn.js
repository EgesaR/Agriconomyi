import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import tw from "twrnc"

const Learn = () => {
  return(
    <View style={tw`h-full`}>
      <Text style={styles.text}>Learn</Text>
      <Button title="Click Me" onPress={() => alert('You clicked the button!')} />
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
})
export default Learn