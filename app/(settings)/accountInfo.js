import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  Image,
  useWindowDimensions,
} from "react-native";
import { Button, IconButton, Divider } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

const InfomationRoute = () => {
  const [displayPicture, setDisplayPicture] = useState();

  //Selects and sets image from the device
  const onPickPicture = () => {
    launchImageLibrary({
      mediaType: 'photo'   
    }, (data) => {
      setDisplayPicture(data.assets[0].uri)
      console.log(data)
    })
  }

  function onClickPicture(){
    launchImageLibrary({
      mediaType: 'photo'   
    }, (data) => {
      setDisplayPicture(data.assets[0].uri)
      console.log(data)
    })
  }
  return(
  <View style={tw`flex-1`}>
    <Text style={tw`text-center text-base my-3 px-2`}>
      Info about you and your preferences can be viewed by other users
    </Text>
    <ScrollView style={tw`px-3`}>
      {/*Bio card*/}
      <View style={tw`border border-slate-400 rounded-lg px-2 py-3 my-2`}>
        <Text style={tw`font-bold text-lg mb-2`}>Basic Info</Text>
        <Text style={tw`text-slate-800`}>Some info may be visible to other users usning the app</Text>
        <View style={tw`mt-3 mb-2 flex-row items-center`}>
          <View style={tw`px-4 flex-1`}>
            <Text style={tw`text-slate-800`}>Profile pic</Text>
            <Text style={tw`text-slate-800`}>A profile pic gives that identity about you.</Text>
          </View>
          <View style={tw`items-center overflow-hidden rounded-full`}>
            <Image
              source={{ uri: !displayPicture ? null : displayPicture }}
              style={tw`h-25 w-25 border-2 border-white rounded-full bg-slate-500`}
            />
            <View style={tw`bg-sky-600/50 w-full absolute -bottom-[2.5] items-center left-0`}>
              <IconButton icon={"camera"} onPress={onPickPicture}  />
            </View>
          </View>
        </View>
        <View style={tw`h-4`}>
          <Divider style={tw`h-0.5`} />
        </View>
        <View style={tw`flex-row items-center py-2 px-2 mt-1 bg-slate-300 rounded-md my-1`}>
          <View>
            <Text style={tw`font-bold`}>Username</Text>
            <Text>Egesa Raymond</Text>
          </View>
          <IconButton icon={"chevron-right"} style={tw`ml-auto`}/>
        </View>
      </View>
      {/*End of Bio Card*/}
      
      {/*Contact card*/}
      <View style={tw`border border-slate-400 rounded-lg px-2 py-3 my-2`}>
        <Text style={tw`font-bold text-lg mb-2`}>Contact Info</Text>
        <View style={tw`flex-row items-center py-2 px-2 bg-slate-300 rounded-md my-1`}>
          <View>
            <Text style={tw`font-bold`}>Email</Text>
            <Text>egesaraymond644@gmail.com</Text>
          </View>
          <IconButton icon={"chevron-right"} style={tw`ml-auto`}/>
        </View>
        <View style={tw`flex-row items-center py-2 px-2 bg-slate-300 rounded-md my-1`}>
          <View>
            <Text style={tw`font-bold`}>Phone Number</Text>
            <Text>0758423090</Text>
          </View>
          <IconButton icon={"chevron-right"} style={tw`ml-auto`}/>
        </View>
      </View>
      {/*End of Contact Card*/}

      {/*Contact card*/}
      <View style={tw`border border-slate-400 rounded-lg px-2 py-3 my-2`}>
        <Text style={tw`font-bold text-lg mb-2`}>Choose what others can see about you</Text>
        <View style={tw`flex-row items-center px-2 gap-`}>
          <Text>
            Decide what personal data can be viewed by everyone across Agriconomy.
          </Text>
          <View style={tw`ml-auto]`}>
            <Text>Image</Text>
          </View>
        </View>
        <Divider />
        <View style={tw`flex-row items-center px-2 py-2 bg-slate-300 rounded-md my-1`}>
          <View>
            <Text>About me</Text>
          </View>
        </View>
      </View>
      {/*End of Contact Card*/}
      
    </ScrollView>
  </View>
);
}

const ChangePasswordRoute = () => (
  <View style={{ flex: 1 }}>
    <Text>Password</Text>
  </View>
);

const DeleteAccountRoute = () => (
  <View style={{ flex: 1 }}>
    <Text>Delete</Text>
  </View>
);

const renderScene = SceneMap({
  information: InfomationRoute,
  password: ChangePasswordRoute,
  deleteAccount: DeleteAccountRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#4780db" }}
    style={{ backgroundColor: "white" }}
    renderLabel={({ route, focused }) => (
      <Text style={{ color: "black", margin: 4 }}>{route.title}</Text>
    )}
  />
);

const AccountInfo = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "information", title: "Information" },
    { key: "password", title: "Password" },
    { key: "deleteAccount", title: "Delete Account" },
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgb(254 242 242)", "rgb(255 241 242)", "rgb(250 232 255)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={tw`h-18 flex-row gap-2 items-center`}>
          <IconButton
            icon={"arrow-left"}
            onPress={() => router.push("/settings")}
          />
          <Text style={tw`text-3xl ml-5 font-bold`}>Account</Text>
        </View>
      </LinearGradient>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountInfo;
