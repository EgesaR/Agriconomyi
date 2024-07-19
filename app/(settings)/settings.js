import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  IconButton,
  Button,
} from "react-native-paper";
import SettingBtn from "../../components/CardBtn";
import tw from "twrnc";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
//import {LinearGradient} from 'react-native-linear-gradient';

const SettingScreen = () => {
  return (
    <View style={{ width: "100%", paddingBottom: 30 }}>      
      <LinearGradient
        colors={[ "rgb(254 242 242)", "rgb(255 241 242)", "rgb(250 232 255)"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1, height: 200}}
      >
        <View style={tw`h-57`}>
          <IconButton icon={"arrow-left"} onPress={() => router.push("/home")} />
          <Text style={tw`text-3xl ml-5 mb-5 font-bold`}>Settings</Text>
        </View>
      </LinearGradient>
      <ScrollView style={tw`bg-white`}>
        <View style={tw`px-5 mb-5 pt-4`}>
          <Text style={tw`text-lg font-bold mb-2`}>General</Text>
          <SettingBtn 
            title={"Account Information"} 
            leadingicon={"account-outline"} 
            trailngicon={"chevron-right"}
            navigateTo={"/accountInfo"}
          />
          <SettingBtn 
            title={"Appearance"} 
            leadingicon={"palette-swatch"} 
            trailngicon={"chevron-right"}
            navigateTo={"/apperance"}
          />
          <SettingBtn 
            title={"Sound and Notifications"} 
            leadingicon={"bell-outline"} 
            trailngicon={"chevron-right"}
            navigateTo={"/soundandnotifications"}
          />
          <SettingBtn 
            title={"Language and Speech"} 
            leadingicon={"google-translate"} 
            trailngicon={"chevron-right"}
            navigateTo={"/languageandspeech"}
          />
        </View>
        <View style={tw`px-5`}>
          <Text style={tw`text-lg font-bold mb-2`}>Support</Text>
          <SettingBtn 
            title={"Report an issue"} 
            leadingicon={"exclamation"} 
            trailngicon={"chevron-right"}
            navigateTo={"/reportanissue"}
          />
          <SettingBtn 
            title={"FAQ"} 
            leadingicon={"help-circle-outline"} 
            trailngicon={"chevron-right"}
            navigateTo={"/FAQ"}
          />
        </View>
      </ScrollView>
      <Button mode={"outlined"} style={tw`w-[60%] mx-auto -mt-[70px]`}>
        <Text style={tw`text-xl font-bold text-black`} onPress={() => {}}>
          Log out
        </Text>
      </Button>
    </View>
  );
};

export default SettingScreen;
