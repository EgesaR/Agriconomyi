import React from "react";
import { View, Text, StyleSheet, Button, Title, Paragraph } from "react-native";
import {
  Avatar,
  Badge,
  IconButton,
  MD3Colors,
  TextInput,
} from "react-native-paper";
import tw from "twrnc";
import {
  TabsProvider,
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";

const Chats = () => {
  return (
    <View style={styles.container}>
      <View style={tw`flex-row items-center px-4 mb-3 h-10 w-full mt-3`}>
        <View style={tw`flex-1 justify-center`}>
          <Text style={tw`text-4xl font-normal`}>Chats</Text>
        </View>
        <Avatar.Icon size={35} icon="folder" style={tw`ml-auto`} />
      </View>
      <View style={tw`flex-1 px-3 justify-center flex-row`}>
        <TextInput
          mode={"filled"}
          placeholder="Search ..."
          style={tw`h-13 bg-[#e3ecfa] rounded-xl px-4 opacity-70`}
          left={<TextInput.Icon icon="magnify" size={25} />}
        />
        <IconButton icon={"filter"} style={tw`bg-[#e3ecfa]`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
/*
<TabsProvider
  defaultIndex={0}
  // onChangeIndex={handleChangeIndex} optional
>
  <Tabs
  // uppercase={false} // true/false | default=true (on material v2) | labels are uppercase
  // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
  // iconPosition // leading, top | default=leading
  // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
  // dark={false} // works the same as AppBar in react-native-paper
  // theme={} // works the same as AppBar in react-native-paper
  // mode="scrollable" // fixed, scrollable | default=fixed
  // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
  // disableSwipe={false} // (default=false) disable swipe to left/right gestures
  >
    <TabScreen label="Recents" icon="compass">
      <View>
        <Text>Recents</Text>
        <View>
          <Badge>3</Badge>
          <Avatar.Icon size={24} icon="folder" />
          <View>
            <Text>
              Egesa Raymond
            </Text>
            <Text>
              Hello everyone! Good morning!
            </Text>
          </View>
          <View>
            <Text>
              12:00 PM
            </Text>
            <View>
              <Text>
                5
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TabScreen>
    <TabScreen label="Groups" icon="airplane" disabled>
      <Text>
        Groups
      </Text>
    </TabScreen>
    <TabScreen
      label="Contacts"
      //badge={true}
      //badge="text"
    >
      <Text>Contacts</Text>
    </TabScreen>
  </Tabs>
</TabsProvider>
*/
/*function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}*/

export default Chats;
