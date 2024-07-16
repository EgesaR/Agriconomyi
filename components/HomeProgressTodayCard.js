import React from 'react';
import { Text, View } from 'react-native';
import { Card, IconButton, MD3Colors, ProgressBar } from 'react-native-paper';
import tw from "twrnc"

const HomeProgressTodayCard = () => {
  return (
    <View style={tw`py-4 px-2 flex-row rounded-2xl bg-[#fff] gap-3 h-46 mt-3`}>
      <View style={tw`flex-0.7`}>
        <Card.Cover
          source={{ uri: "https://picsum.photos/300" }}
          style={tw`h-full`}
        />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`font-semibold text-[1.15rem] mr-2 mt-4`}>
          Current Lesson:
        </Text>
        <Text style={tw`font-semibold text-[1rem]`} numberOfLines={1}>
          Introduction to React Native
        </Text>

        <View style={tw`flex-row justify-center items-center w-full absolute bottom-11 px-8 gap-5`}>
          <ProgressBar progress={30 / 100} color={MD3Colors.error50} style={tw`h-2 rounded-xl`} />
            <Text style={tw`text-[0.95rem]`}>30/100</Text>
        </View>

        <IconButton 
          style={tw`absolute -bottom-10.25 right-1`}
          containerColor={"rgb(34 197 94)"}
          mode={"contained"}
          icon="play"
          iconColor={"#fff"}
          size={30}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default HomeProgressTodayCard;
