import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Chip, Card, Button, Text, Icon, MD3Colors } from "react-native-paper";
import tw from "twrnc";

const TrendingCourseCard = ({}) => {
  return (
    <Card elevation={2} style={tw`h-97 w-64 mb-3 mr-7 relative`}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={tw`h-[70%]`} />
      <Chip
        style={tw`absolute top-2 right-2 flex flex-row jusify-center items-center backdrop-blur-sm bg-black/35`}
      >
        <View>
          <Icon source="star" color={"rgb(250 204 21);"} size={20} />
        </View>
        <Text style={tw`text-[1rem] text-white font-semibold ml-1`}>4.5</Text>
        <Text style={tw`text-[1rem] text-white font-semibold`}>{" | "}</Text>
        <Text style={tw`text-[1rem] text-white font-semibold`}>
          306 Reviews
        </Text>
      </Chip>
      <View style={tw`px-3`}>
        <Text style={tw`font-semibold text-[1.15rem] mt-2 mb-1`}>
          Figma UX/UI Design Essentials
        </Text>
        <Text style={tw`text-green-800 mb-1.5`}>Egesa Raymond</Text>
        <Text style={tw`mb-1.5`}>
          Use Figma to get a job UI design, User Interface, User Experiece
          design, UX Design and Web Design
        </Text>
        <View style={tw`flex flex-row justify-end mt-1`}>
          <Button
            icon="play"
            mode="outlined"
            style={tw`w-[50%]`}
            onPress={() => console.log("Pressed")}
          >
            Start
          </Button>
        </View>
      </View>
    </Card>
  );
};

export default TrendingCourseCard;
