import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { TextInput } from "react-native-paper"

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tw`space-y-2 mt-3 ${otherStyles}`}>
      <Text style={tw`text-base text-gray-600 font-pmedium`}>{title}</Text>
        <TextInput
          activeOutlineColor="rgb(226 232 240)"
          style={tw`flex-1 font-psemibold mt-4 isolate rounded-xl shadow-lg ring-1 ring-black/5 bg-slate-500 border border-1`}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          mode="outlined"
          outlineColor="transparent"
          textColor="black"
          right={title === "Password" && (
            <TextInput.Icon 
              icon={!showPassword ? icons.eye : icons.eyeHide} 
              onPress={() => setShowPassword(!showPassword)}
            />
          )}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
    </View>
  );
};

export default FormField;