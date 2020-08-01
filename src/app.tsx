import React from "react";
import { Provider } from "@tarojs/redux";
import Taro, { Component } from "@tarojs/taro";
import configStore from "./store";
import Index from "./pages/index";
import "./app.scss";

// console.log(Provider);

// const reducers = combineReducers({
//   thread: (state = {}, action) => {
//     if (action.type === "SET_CURRENT_THREAD") {
//       return Object.assign({}, state, action.thread);
//     }
//     return state;
//   },
// });

const store = configStore();

class App extends Component {
  render() {
    // this.props.children 是将要会渲染的页面
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
// export default App;
