import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import tw from "twrnc"

const SlideItem = ({ item }) => {
  const {width, height} = useWindowDimensions();
  
  return (
    <View style={[tw`items-center`,{width, height}]}>
      <Image 
        source={item.image} 
        resizeMode='contain' 
        style={tw`w-full h-[50%] mt-5`} 
        />
      <View style={tw`items-center flex-[0.4]`}>
      <Text style={tw`text-2xl font-semibold text-[#333]`}>{item.title}</Text>
      <Text style={tw`text-lg text-[#333] my-3`}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;