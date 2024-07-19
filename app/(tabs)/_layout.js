import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import tw from "twrnc";
import { icons } from "../../constants";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./home";
import DrawerContent from "../../components/DrawerContent";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={tw`w-6 h-6`}
      />
      <Text
        style={tw`text-xs text-white ${focused ? "font-psemibold" : "font-pregular"}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabIcon1 = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Icon name={icon} color={color} size={focused ? 20 : 18} />
      <Text style={{ color: color }}>{name}</Text>
    </View>
  );
};

const TabStack = () => {
  return(
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffa001",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 55,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Learn"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Events"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Chats"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="update"
        options={{
          title: "Updates",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.play}
              color={color}
              name="Updates"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  )
}

const TabsLayout = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props}/>}
        screenOptions={{ headerShown: false }}
        >
        <Drawer.Screen name="Events" component={TabStack}/>
      </Drawer.Navigator>
      
    </>
  );
};
export default TabsLayout;
