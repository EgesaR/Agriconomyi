import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  StatusBar,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import tw from "twrnc";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { LightScheme } from "../theme/lightScheme";
import { DarkScheme } from "../theme/darkScheme";

const LightTheme = {
  ...MD3LightTheme,
  color: LightScheme,
};

const DarkTheme = {
  ...MD3DarkTheme,
  color: DarkScheme,
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : LightTheme;
  
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={tw`bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-full`}
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View
            style={tw`bg-white w-full h-full justify-center items-center px-4`}
          >
            <Image
              source={require("../assets/images/reading.jpg")}
              style={{ width: "200px", height: "220px" }}
              resizeMode="contain"
            />
            <View style={tw`relative mt-5`}>
              <Text
                style={tw`text-3xl text-slate-800 font-psemibold text-center font-bold`}
              >
                Discover Endless Possibilities with{" "}
                <Text style={{ color: "rgb(16 185 129)" }}>Agriconomy</Text>
              </Text>
            </View>
            <Text style={tw`text-gray-100 text-center mt-7 text-base`}>
              Where young innovative and collaborative minds are building a
              better world with Agriconomy.
            </Text>

            <CustomButton
              title="Get Started"
              handlePress={() => {
                !isLoggedIn ? router.push("/sign-in") : router.push("/home");
              }}
              containerStyles={`w-[50%] sm:w-[30%] mt-7`}
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor={"#161622"} barStyle={"light-content"} />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "black",
    height: "100%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default App;
