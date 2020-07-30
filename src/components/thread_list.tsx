import React from "react";
import { View } from "@tarojs/components";
import { Thread } from "./thread";

interface ThreadProps {
  cid: string;
  ctime: string;
  del: string;
  desc: string;
  id: string;
  imageUrl: string;
  mid: string;
  name: string;
  pathUrl: string;
  sort: string;
  status: string;
  type: string;
  utime: string;
}

interface Props {
  loading: boolean;
  threads: Array<ThreadProps>;
}

class ThreadList extends React.Component<Props, {}> {
  static defaultProps = {
    threads: [],
    loading: true,
  };

  render() {
    console.log("list-props", this.props, this.props);
    const { loading = false, threads } = this.props;

    if (loading) {
      return <view>loading...</view>;
    }

    const element = threads.map((thread) => {
      return (
        <Thread
          key={thread.id}
          name={thread.name}
          last_modified={thread.utime}
          member={thread.sort}
          imageUrl={thread.imageUrl}
        />
      );
    });

    return <View className="thread-list">{element}</View>;
  }
}

export { ThreadList };
