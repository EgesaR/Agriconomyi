import { Animated, FlatList, View } from "react-native";
import tw from "twrnc";
import slides from "../data/slides";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import { useRef, useState } from "react";

const onBoarding = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { x: scrollX },
          }
        }
      ],
      { useNativeDriver: false }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      setIndex(currentIndex);
    }
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  return (
    <View style={tw`flex-1 justify-center`}>
      <FlatList 
        data={slides} 
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} scrollX={scrollX} index={index} />
    </View>
  );
};

export default onBoarding;
