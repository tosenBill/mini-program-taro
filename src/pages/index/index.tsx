// import React from "react";
// import { View } from "@tarojs/components";
// import { createStore } from "redux";
// import "./index.scss";

// const onNumberIncrement = (num: Number) => {
//   return {
//     type: "INCREMENT",
//     payload: num,
//   };
// };

// const reducer = (state = 0, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const onIncrement: Function = () => {
//   console.log("onIncrement");
// };

// const onDecrement: Function = () => {
//   console.log("onDecrement");
// };

// const store = createStore(reducer);

// console.log(store);

// const Index = () => {
//   return (
//     <View className="index">
//       <view>111</view>
//       <View>
//         <View>111</View>
//         <View onClick={() => onIncrement()}>+</View>
//         <View onClick={() => onDecrement()}>-</View>
//       </View>
//     </View>
//   );
// };

// export default Index;
import Taro from "@tarojs/taro";
import React from "react";
import { View } from "@tarojs/components";
import { ThreadList } from "../../components/thread_list";
import api from "../../api";

// interface Props {
//   loading: boolean;
//   threads: Array<Object>;
// }

class Index extends React.Component {
  config = {
    navigationBarTitleText: "首页",
  };

  state = {
    loading: true,
    threads: [],
  };

  async componentDidMount() {
    try {
      const res = await Taro.request({
        url: api.getAllBanner(),
      });
      const {
        data: { payload },
      } = res;
      this.setState({
        threads: payload,
        loading: false,
      });
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }
  }

  render() {
    const { loading = false, threads = [] } = this.state;
    return (
      <View className="index">
        <ThreadList threads={threads} loading={loading} />
      </View>
    );
  }
}

export default Index;
