import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card, Avatar, Button, Chip } from "react-native-paper";
import tw from "twrnc";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const UpdateCard = ({
  image,
  like,
  favourited,
  avatar,
  username,
  numberOfPeopleSeen,
  title,
  createdAt,
  message,
  numberOfLikes,
  numberOfComments,
  numberOfShares,
}) => {
  const [liked, setLiked] = useState(like);
  const [favorite, setFavorite] = useState(favourited);

  const _handleLikeClick = () => (!liked ? setLiked(true) : setLiked(false));
  const _handleFavoriteClick = () =>
    !favorite ? setFavorite(true) : setFavorite(false);

  return (
    <Card style={tw`p-5 mb-8 rounded-2xl rounded-t-2xl bg-slate-300`}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <View style={tw`py-1 mt-7 bg-blue-400 rounded-md items-center max-w-24`}>
        <Text style={tw`text-lg text-blue-900 font-semibold`}>Hello</Text>
      </View>
      <Text style={tw`mt-4 font-semibold text-base`}>
        Published on {createdAt}
      </Text>
      <Card.Content>
        <Text style={tw`mt-4 text-3xl font-semibold`}>{title}</Text>
        <Text style={tw`mt-6 text-lg text-slate-600`} numberOfLines={4}>
          {message}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="text">
          <Text style={tw`text-blue-600 text-[20px] font-semibold`}>Read More</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default UpdateCard;

/*
<Card
  style={{
    marginBottom: 25,
    marginHorizontal: 5,
    borderRadius: 20,
    minHeight: 495,
  }}
>
  <Card.Cover
    source={{
      uri: image,
    }}
    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
  />
  <Image
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
  <Card.Content>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Avatar.Image size={50} source={{
          uri: {avatar},
        }} />
      <View
        style={{
          position: "absolute",
          bottom: 90,
          width: "100%",
          right: 0,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          icon={!liked ? "thumb-up-outline" : "thumb-up"}
          size={25}
          onPress={_handleLikeClick}
        />
        <IconButton
          icon={!favorite ? "heart-outline" : "heart"}
          size={25}
          onPress={_handleFavoriteClick}
        />
        <IconButton icon="share" size={25} onPress={() => {}} />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Title style={{ fontSize: 14 }}>{username}</Title>
        <Paragraph style={{ fontSize: 12, color: "#666" }}>
          Seen by {numberOfPeopleSeen} people
        </Paragraph>
      </View>
    </View>
    <Title style={{ marginTop: 15 }}>{title}</Title>
    <Paragraph style={{ fontSize: 14 }} numberOfLines={1}>
      {message}
    </Paragraph>
  </Card.Content>
  <Card
    style={{ position: "absolute", bottom: 0, left: 15, width: "90%" }}
  >
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",

        paddingHorizontal: 20,
        elevation: 4,
        justifyContent: "space-between",
        height: 50,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>{numberOfLikes}</Text>
        <Text>Likes</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>{numberOfComments}</Text>
        <Text>Comments</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>{numberOfShares}</Text>
        <Text>Shares</Text>
      </View>
    </View>
  </Card>
</Card>
*/
