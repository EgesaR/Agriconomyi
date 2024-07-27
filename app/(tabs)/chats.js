import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  Image,
  Modal,
  Pressable,
  useWindowDimensions,
  TouchableHighlight,
} from "react-native";
import {
  Button,
  IconButton,
  Divider,
  MD3Colors,
  Avatar,
  Badge,
} from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import tw from "twrnc";
import PopularSection from "../../components/Sections/PopularSection";
import SuggestionSection from "../../components/Sections/SuggestionSection";


const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ExploreRoute = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={tw`flex-1 pt-3`}>
      <PopularSection />
      <SuggestionSection />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView style={tw`bg-[#fafcff] h-full w-full px-1`}>
          <View
            style={tw`flex-row items-center absolute top-0 left-0 z-1 w-full`}
          >
            <IconButton
              icon={"chevron-left"}
              style={tw`bg-white`}
              size={20}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={tw`flex-row ml-auto`}>
              <IconButton
                icon={"bell-outline"}
                style={tw`bg-white`}
                size={20}
              />
              <IconButton
                icon={"dots-horizontal"}
                style={tw`bg-white`}
                size={20}
              />
            </View>

            <View>
              <Image
                style={tw`h-full w-full bg-sky-700`}
                source={{ uri: "https://picsum.photos/700" }}
              />
            </View>
          </View>

          <View>
            <Image
              style={tw`h-50 rounded-lg w-full bg-sky-700`}
              source={{ uri: "https://picsum.photos/700" }}
            />
            <View style={tw`mt-3 px-3`}>
              <Text style={tw`font-bold text-[#142c35] text-3xl`}>
                Health Partner
              </Text>
              <Text style={tw`text-base text-[#bbc6c9] mt-1 font-semibold`}>
                3.7K members
              </Text>
              <View style={tw`mt-2`}>
                <Text style={tw`text-base`}>
                  For nutrition advice to fitness tips, this community is where
                  you go to share in all things health!
                </Text>

                <Text style={tw`text-[#5f8925] text-base mt-2 mb-5`}>
                  Read More
                </Text>
              </View>
            </View>
            <Divider />
          </View>
        </ScrollView>
      </Modal>
      <Pressable style={{}} onPress={() => setModalVisible(true)}>
        <Text style={{}}>Show Modal</Text>
      </Pressable>
    </ScrollView>
  );
};

const UserAvatar = ({ name, image }) => {
  return (
    <View style={tw`items-center justify-center w-14 mx-1`}>
      <View style={tw`rounded-full h-11 w-11`}>
        <Avatar.Icon size={44} icon="folder" />
        <Badge style={tw`absolute bottom-0 right-0`} size={15}></Badge>
      </View>
      <Text>{name}</Text>
    </View>
  );
};

const MessageBtn = ({modalVisible,setModalVisible, username, message, data, setData}) => {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");

  // Format the time string without seconds
  let timePassed = `${hours}:${minutes}`;
  let numOfmissedMessages = 1;
  function truncateString(word, maxLength) {
    
    return word;
  }
  /*function truncateString(word, maxLength) {
    if (word.length > maxLength) {
      return word.slice(0, maxLength) + "...";
    }
    return word;
  }*/

  let missedMessage = message

  return (
    <Pressable
      onPress={() => setModalVisible(true)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        tw`flex-row items-center justify-center w-full px-1 my-1`
      ]}
    >
      <View style={tw`flex-row gap-2 my-2 w-full`}>
        <Avatar.Icon size={44} icon="folder" />
        <View>
          <Text>{username}</Text>
          <Text>{missedMessage}</Text>
        </View>
        <View style={tw`ml-auto`}>
          <Text>
            {timePassed}
            {hours < 12 ? "AM" : "PM"}
          </Text>
          <Badge
            style={tw`${numOfmissedMessages <= 5 ? "bg-blue-400" : numOfmissedMessages <= 10 ? "bg-yellow-500" : "bg-red-600"}`}
          >
            {numOfmissedMessages}
          </Badge>
        </View>
      </View>
    </Pressable>
  );
};

const YourGroupRoute = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
  <ScrollView style={tw`flex-1 px-1 w-full`}>
    <View style={tw`flex-row my-3`}>
      <Text>New Group</Text>
      <Text style={tw`ml-auto`}>Archive(3)</Text>
    </View>
    <View style={tw`mt-3`}>
      <ScrollView horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false} style={tw`px-2`}>
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
        <UserAvatar name={"Henry"} />
      </ScrollView>
      <View style={tw`mt-3`}>
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} message={"Hello world and beyound this is raymond from algeria"} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <MessageBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView style={tw`bg-[#fafcff] h-full w-full px-1`}>
            <View
              style={tw`flex-row items-center absolute top-0 left-0 z-1 w-full`}
            >
              <IconButton
                icon={"chevron-left"}
                style={tw`bg-white`}
                size={20}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <View style={tw`flex-row ml-auto`}>
                <IconButton
                  icon={"bell-outline"}
                  style={tw`bg-white`}
                  size={20}
                />
                <IconButton
                  icon={"dots-horizontal"}
                  style={tw`bg-white`}
                  size={20}
                />
              </View>

              <View>
                <Image
                  style={tw`h-full w-full bg-sky-700`}
                  source={{ uri: "https://picsum.photos/700" }}
                />
              </View>
            </View>

            <View>
              <Image
                style={tw`h-50 rounded-lg w-full bg-sky-700`}
                source={{ uri: "https://picsum.photos/700" }}
              />
              <View style={tw`mt-3 px-3`}>
                <Text style={tw`font-bold text-[#142c35] text-3xl`}>
                  Health Partner
                </Text>
                <Text style={tw`text-base text-[#bbc6c9] mt-1 font-semibold`}>
                  3.7K members
                </Text>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-base`}>
                    For nutrition advice to fitness tips, this community is where
                    you go to share in all things health!
                  </Text>

                  <Text style={tw`text-[#5f8925] text-base mt-2 mb-5`}>
                    Read More
                  </Text>
                </View>
              </View>
              <Divider />
            </View>
          </ScrollView>
        </Modal>
      </View>
    </View>
  </ScrollView>
);
}

const renderScene = SceneMap({
  explore: ExploreRoute,
  yourGroup: YourGroupRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#4780db" }}
    style={{ backgroundColor: "transparent" }}
    renderLabel={({ route, focused }) => (
      <Text style={tw`text-black font-bold m-[2px]`}>{route.title}</Text>
    )}
  />
);

const Chats = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "explore", title: "Explore" },
    { key: "yourGroup", title: "Your Groups" },
  ]);

  return (
    <View style={tw`flex-1 px-2`}>
      <View style={tw`flex-row items-center h-[10%]`}>
        <Text style={tw`text-4xl font-bold`}>Groups</Text>
        <IconButton icon={"magnify"} style={tw`ml-auto bg-slate-300`} />
      </View>
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
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});

export default Chats;
