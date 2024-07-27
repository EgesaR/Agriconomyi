import { Image, View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import tw from "twrnc";

const SuggestionSectionCard = ({ title, numberOfMembers, image, props }) => {
  return (
    <View style={tw`overflow-hidden rounded-lg h-80 w-60 mr-6`}>
      <Image style={tw`h-full w-full bg-sky-700`} source={{ uri: image }} />
      <IconButton
        icon={"close"}
        style={tw`absolute bg-black/40 top-2 right-2`}
        onPress={() => {}}
      />
      <View style={tw`absolute bottom-5 left-2 px-3`}>
        <Text style={tw`text-xl font-semibold text-white`}>{title}</Text>
        <Text style={tw`text-[#ddd] text-base`}>
          {numberOfMembers}K members
        </Text>
      </View>
    </View>
  );
};

export default SuggestionSectionCard