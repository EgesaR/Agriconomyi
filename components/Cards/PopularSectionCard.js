import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

const PopularSectionCard = ({ title, numberOfMembers, image, props }) => {
  return (
    <TouchableOpacity>
      <View style={tw`overflow-hidden rounded-lg h-80 w-60 mr-6`}>
        <Image style={tw`h-full w-full bg-sky-700`} source={{ uri: image }} />
        <View style={tw`absolute bottom-5 left-2 px-3`}>
          <Text style={tw`text-xl font-semibold text-white`}>{title}</Text>
          <Text style={tw`text-[#ddd] text-base`}>
            {numberOfMembers}K members
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularSectionCard