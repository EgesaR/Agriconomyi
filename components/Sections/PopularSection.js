import { ScrollView, View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import PopularSectionCard from "../Cards/PopularSectionCard";
import tw from "twrnc";

const PopularSection = () => {
  return (
    <View>
      <View style={tw`flex-row items-center`}>
        <View>
          <Text style={tw`text-3xl font-semibold`}>Popular</Text>
          <Text style={tw`text-slate-500 text-lg`}>
            The most active groups in the commnity
          </Text>
        </View>
        <IconButton icon={"chevron-right"} style={tw`ml-auto`} />
      </View>
      <ScrollView horizontal style={tw`mt-5`}>
        <PopularSectionCard
          title={"Health Conceptors"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
        <PopularSectionCard
          title={"Cardiac management"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
        <PopularSectionCard
          title={"Cardiac management"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
      </ScrollView>
    </View>
  );
};

export default PopularSection;