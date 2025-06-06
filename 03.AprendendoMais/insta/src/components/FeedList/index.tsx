import { Dispatch, SetStateAction } from "react";
import { feedVarType } from "../../variables"
import { FlatList, Text } from 'react-native';
import FeedItem from "./components/FeedItem";

type FeedListProps = {
  feed: feedVarType[];
  //setFeed: Dispatch<SetStateAction<feedVarType[]>>;
}

function FeedList({ feed }: FeedListProps) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={feed}
      renderItem={({ item }) => <FeedItem feed={item} />}
    >

    </FlatList>
  )
}

export default FeedList