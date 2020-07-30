import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";

interface ThreadProps {
  key: string;
  name: string;
  last_modified: string;
  member: string;
  imageUrl: string;
}

class Thread extends React.Component<ThreadProps, {}> {
  // const { key, not_navi } = this.props
  // if (not_navi) {
  //   return
  // }
  // eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props)
  // this.props.setThread(this.props)
  handleNavigate = () => {
    // 跳转到帖子详情
    Taro.navigateTo({
      url: "/pages/thread_detail/thread_detail",
    });
  };

  render() {
    console.log("thread-props", this.props);
    const { imageUrl, name } = this.props;

    return (
      <View className="thread">
        <Image src={imageUrl} className="avatar" />
        <Text>{name}</Text>
      </View>
    );
  }
}

export { Thread };
//  const mapDispatchToProps = dispatch => {
//        return {
//          setThread: thread => dispatch({ type: 'SET_CURRENT_THREAD', thread })
//        }
//      }
//      export default connect(null, mapDispatchToProps)(Thread)
