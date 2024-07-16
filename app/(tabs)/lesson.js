import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Icon, IconButton, Surface, Button, List } from "react-native-paper";
import tw from "twrnc";
import LearningPathListAccordion from "../../components/LearningPathListAccordion";

const Lesson = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <View style={tw`h-[90%] bg-blue-600`}>
        <ScrollView>
          <Image
            source={{ uri: "https://picsum.photos/700" }}
            style={tw`h-50 w-full`}
          />
          <View style={tw`px-3.5`}>
            <View style={tw` justify-between mt-3`}>
              <Text style={tw`font-semibold text-[1.4rem] mt-3 mb-1`}>
                Figma UX/UI Design Essentials
              </Text>
            </View>
            <View
              style={tw`bg-[#e2eafe] rounded-lg w-full py-1.5 px-4 flex-row justify-center items-center gap-2 mt-2`}
            >
              <Button
                mode="contained"
                style={tw`w-[50%] rounded-md bg-transparent bg-[#387ef3]`}
              >
                <Text style={tw`font-semibold text-black text-white`}>
                  Learning Path
                </Text>
              </Button>
              <Button
                mode="contained"
                style={tw`w-[50%] rounded-md bg-transparent`}
              >
                <Text style={tw`font-semibold text-black`}>Descriptions</Text>
              </Button>
            </View>
            <View style={tw`mt-3`}>
              <LearningPathListAccordion
                title={"Chapter 1: Introduction"}
                id={"1"}
                icon={"play-circle"}
                listItem={[
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "Heloo" },
                ]}
              />
              <LearningPathListAccordion
                title={"Chapter 2: Prerequistes"}
                id={"2"}
                icon={"play-circle"}
                listItem={[
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "Heloo" },
                ]}
              />
              <LearningPathListAccordion
                title={"Chapter 3: Getting Started"}
                id={"3"}
                icon={"play-circle"}
                listItem={[
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "hello" },
                  { title: "Heloo" },
                ]}
              />
            </View>
          </View>
          <View style={tw`h-8`} />
        </ScrollView>
      </View>
      <View
        style={tw`flex-row justify-between items-center gap-2 px-3 absolute bottom-[1.5%] left-0 w-full`}
      >
        <Button
          style={tw`flex-0.05 rounded-md bg-[#ffb200] flex justify-center items-center`}
        >
          <Icon source="bookmark-outline" size={21} color={"white"} />
        </Button>
        <Button style={tw`flex-1 rounded-md bg-[#387ef3]`}>
          <Text style={tw`text-white text-center font-semibold`}>
            Enroll Now
          </Text>
        </Button>
      </View>
    </>
  );
};

export default Lesson;
