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
      <View style={tw`flex-1 px-1 w-full`}></View>
    </>
  );
};

export default Lesson;
