import { View, Text, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import SuggestionSectionCard from "../Cards/SuggestionSectionCard";
import tw from "twrnc";

const SuggestionSection = () => {
  return (
    <View style={tw`py-3`}>
      <View style={tw`flex-row items-center mt-5`}>
        <View>
          <Text style={tw`text-3xl font-semibold`}>Suggested For You</Text>
          <Text style={tw`text-slate-500 text-lg`}>
            Basing on other groups and interests
          </Text>
        </View>
        <IconButton icon={"chevron-right"} style={tw`ml-auto`} />
      </View>
      <ScrollView horizontal style={tw`mt-5`}>
        <SuggestionSectionCard
          title={"Health Conceptors"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
        <SuggestionSectionCard
          title={"Cardiac management"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
        <SuggestionSectionCard
          title={"Cardiac management"}
          numberOfMembers={80}
          image={"https://picsum.photos/700"}
        />
      </ScrollView>
    </View>
  );
};

export default SuggestionSection