import { router } from "expo-router";
import React, {
} from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { IconButton, Title, Divider } from "react-native-paper";
import tw from "twrnc";

const CardBtn = ({ title, trailngicon, leadingicon, navigateTo, ...props }) => {

  return (
    <TouchableOpacity onPress={() => router.push(navigateTo)}>
      <View style={tw`flex-row items-center`}>
        <IconButton icon={leadingicon} size={25} />
        <Text>{title}</Text>
        <IconButton icon={trailngicon} size={20} style={tw`ml-auto`} />
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default CardBtn;