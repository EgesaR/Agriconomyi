import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OnBoarding from "../../components/onBoarding";
import tw from "twrnc";
import { Button, Modal, Portal, PaperProvider } from "react-native-paper";
import users from "../../users.json";

const Onboarder = () => {
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = React.useState(false);

  console.log(users);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "150%",
    zIndex: 100,
  };
  return (
    <View style={tw`px-2`}>
     
    </View>
  );
};

export default Onboarder;
