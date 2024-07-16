import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, useWindowDimensions } from 'react-native';
import tw from "twrnc"

const Pagination = ({ data, scrollX, index }) => {
  const {width} = useWindowDimensions();
  console.log("index: ", index)
  return (
    <View 
      style={tw`absolute bottom-40 flex-row w-full items-center justify-center`}
    >
      {
        data.map((_,idx) => {
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[20,35,20],
            extrapoloate: "clamp"
          })
          console.log("idx:",idx)
          
          return <Animated.View 
                   key={idx.toString()} 
                   style={[styles.dot, {width:dotWidth}, idx === index && styles.activeDot]}
                />
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  dot:{
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#ccc"
  },
  dotActive: {
  backgroundColor: "#000"
  }
})

export default Pagination;
