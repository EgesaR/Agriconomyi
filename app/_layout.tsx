import React, { useContext, useEffect, useState } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import Loading from "../components/Loading";
import AuthLayout from "./(auth)/_layout";
import TabsLayout from "./(tabs)/_layout";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Text } from "react-native";

//import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#31b634",
    accent: "#f1c40f",
  },
};

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInn, setLoggedInn] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setIsLoading(false);
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          header: () => <></>,
        }}
      >
        <AuthLayout options={{ headerShown: false }} />
        <TabsLayout options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
};
export default RootLayout;
