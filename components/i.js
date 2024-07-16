export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.horizonedge.agriconomy",
  projectId: "66655837001403eeda7b",
  databaseId: "66655aed003a508ebc4a",
  userCollectionId: "66655b2c0017b50925b0",
  videoCollectionId: "66655b7d003b254cd84d",
  storageId: "66655e2e0014cab6c736",
};

import React, { useEffect, useState } from "react";
import { SplashScreen, Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebaseConfig";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
  const [user, setUser] = useState(User);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (newUser) => {
      console.log("user", newUser);
      setUser(newUser);
    });
  }, []);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{
      headerTitleAlign: 'center',
      headerBackTitleVisible: false
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="/search/[query]" options={{ headerShown: false }} />
      <Stack.Screen name="/profile" options={{ headerShown: false }} />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </Stack>
    )
};
export default RootLayout;


<ScrollView>
  <View >
    <TodayProgressCard />
    <Text style={tw`font-bold text-[1.4rem]`}>Course Progress</Text>
    <HomeProgressTodayCard />

    <View>
      <View>
        <Title>Trending Courses</Title>
        <Button>See all</Button>
        <View>
          <View>
            <TrendingCourseCard imageUrl={""} instructor={"David Alison"} rating={34} reviews={"Hello"} title={"American Political Science"} />
          </View>
        </View>
      </View>
    </View>
  </View>
</ScrollView>