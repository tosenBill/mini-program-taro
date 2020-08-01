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
// import React from "react";
// import Taro, { Component } from "@tarojs/taro";
// import { View } from "@tarojs/components";
// import { ThreadList } from "../../components/thread_list";
// import api from "../../api";

// export default class Index extends Component {
//   config = {
//     navigationBarTitleText: "首页",
//   };

//   state = {
//     loading: true,
//     threads: [],
//   };

//   async componentDidMount() {
//     try {
//       const res = await Taro.request({
//         url: api.getAllBanner(),
//       });
//       const {
//         data: { payload },
//       } = res;
//       this.setState({
//         threads: payload,
//         loading: false,
//       });
//     } catch (error) {
//       Taro.showToast({
//         title: "载入远程数据错误",
//       });
//     }
//   }

//   render() {
//     const { loading = false, threads = [] } = this.state;
//     return (
//       <View className="index">
//         <ThreadList threads={threads} loading={loading} />
//       </View>
//     );
//   }
// }

import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页",
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
