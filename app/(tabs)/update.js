import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import UpdateCard from "../../components/UpdateCard";
import tw from "twrnc";
import { post } from "../../lib/data";

const Update = () => {
  return (
    <View style={tw`w-full px-[6.5%] h-full pt-4`}>
      <View>
        <Text style={tw`text-4xl mt-2 mb-4`}>Updates</Text>
      </View>
      
      <ScrollView style={tw`overflow-y-auto`}>
        {post.map((post, index) => (
          <UpdateCard
            key={index}
            image={post.image}
            like={post.like}
            favourited={post.favourited}
            avatar={post.avatar}
            username={post.username}
            numberOfPeopleSeen={post.numberOfPeopleSeen}
            title={post.title}
            createdAt={post.createdAt}
            message={post.message}
            numberOfLikes={post.numberOfLikes}
            numberOfComments={post.numberOfComments}
            numberOfShares={post.numberOfShares}
          />
        ))}
      </ScrollView>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        medium
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default Update;
