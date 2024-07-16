import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import tw from "twrnc"

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return(
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={tw`bg-teal-600 rounded-xl min-h-[62px] justify-center items-center px-4 py-2 ${containerStyles} ${isLoading ? "opacity-50" : ""}`
      }
      disabled={isLoading}>
      <Text style={tw`text-primary-100 text-lg font-psemibold ${textStyles}`}> 
        {title}
      </Text>
    </TouchableOpacity>
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
export default CustomButton