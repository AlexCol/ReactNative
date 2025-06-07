import { Dispatch, SetStateAction, useState } from "react";
import { feedVar, feedVarType } from "../../variables"
import { FlatList, Text } from 'react-native';
import FeedItem from "./components/FeedItem";

function FeedList() {
  const feedsFromStorage: feedVarType[] = feedVar; // Simulating fetching from storage
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={feedsFromStorage}
      renderItem={({ item }) => <FeedItem feed={item} />}
    >

    </FlatList>
  )
}

export default FeedList