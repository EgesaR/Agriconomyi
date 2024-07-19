import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, IconButton, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const DrawerList = [
  {icon: "cog", label: "Settings", navigateTo: "/settings"},
  {icon: "message", label: "Feedback", navigateTo: ""},
  {icon: "exclamation", label: "About Us", navigateTo: ""},
]

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation()
  return(
    <DrawerItem
      icon={({color, size}) => <IconButton icon={icon} color={color} size={size} />}  
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo)
        router.push(navigateTo)
      }}
    />
  )
}

const DrawerItems = props => {
  return DrawerList.map((item, index) => {
    return(
      <DrawerLayout 
        key={index} 
        icon={item.icon}
        label={item.label}
        navigateTo={item.navigateTo}
      />
    )
  })
}

const DrawerContent = (props) => {
  return (
    <View style={tw`flex-1`}>
      <DrawerContentScrollView {...props}>
        <View>
            <View style={tw`pl-[10px]`}>
              <View style={tw`flex-row mt-[15px]`}>
                <Avatar.Image
                  size={40}
                  source={require("../assets/images/logo.png")}
                  style={tw`mt-[5px]`}
                />
                <View style={tw`ml-[10px] flex-col`}>
                  <Title style={tw`text-[20px] mt-[3px] font-bold`}>Egesa Raymond</Title>
                  <Text style={tw`text-[15px] text-[#6e6e6e] w-full`} numberOfLines={1}>egesaraymond644@gmail.com</Text>
                </View>
              </View>
            </View>
          <View style={tw`mt-[15px] border-0 border-[#dedede] border-b`}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
