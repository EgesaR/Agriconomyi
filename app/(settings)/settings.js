import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Avatar,
  Title,
  Surface,
  Paragraph,
  IconButton,
  Card,
  Button,
  Icon,
  Divider,
} from "react-native-paper";
import SettingBtn from "../../components/CardBtn";
import tw from "twrnc";
import { router } from "expo-router";

const SettingScreen = () => {
  return (
    <View style={{ width: "100%", paddingBottom: 30 }}>
      <IconButton icon={"arrow-left"} onPress={() => router.push("/home")} />  
      <Text style={tw`text-3xl ml-5 mb-5 font-bold`}>Settings</Text>
      <ScrollView style={tw`bg-white`}>
        <View style={tw`px-5 mb-5`}>
          <Text style={tw`text-lg font-bold mb-2`}>General</Text>
          <SettingBtn 
            title={"Account Information"} 
            leadingicon={"account-outline"} 
            trailngicon={"chevron-right"}
          />
          <SettingBtn 
            title={"Appearance"} 
            leadingicon={"palette-swatch"} 
            trailngicon={"chevron-right"}
          />
          <SettingBtn 
            title={"Sound and Notifications"} 
            leadingicon={"bell-outline"} 
            trailngicon={"chevron-right"}
          />
          <SettingBtn 
            title={"Language and Speech"} 
            leadingicon={"google-translate"} 
            trailngicon={"chevron-right"}
          />
        </View>
        <View style={tw`px-5`}>
          <Text style={tw`text-lg font-bold mb-2`}>Support</Text>
          <SettingBtn 
            title={"Report an issue"} 
            leadingicon={"exclamation"} 
            trailngicon={"chevron-right"}
          />
          <SettingBtn 
            title={"FAQ"} 
            leadingicon={"help-circle-outline"} 
            trailngicon={"chevron-right"}
          />
        </View>
      </ScrollView>
      <Button mode={"outlined"} style={tw`w-[60%] mx-auto mt-15`}>
        <Text style={tw`text-xl font-bold text-black`} onPress={() => {}}>
          Log out
        </Text>
      </Button>
    </View>
  );
};

export default SettingScreen;
