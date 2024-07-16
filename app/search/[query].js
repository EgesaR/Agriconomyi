import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Search = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
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
export default Search