import { Dispatch, SetStateAction } from "react";
import { feedVarType } from "../../variables"
import { FlatList, Text } from 'react-native';

type FeedListProps = {
  feed: feedVarType[];
  //setFeed: Dispatch<SetStateAction<feedVarType[]>>;
}

function FeedList({ feed }: FeedListProps) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={feed}
      renderItem={(item) => {
        return (
          <Text>Feed....</Text>
        )
      }}
    >

    </FlatList>
  )
}

export default FeedList