/*
 * @Descripttion: https://zhuanlan.zhihu.com/p/101225564?utm_source=wechat_session
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-29 14:46:02
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-29 20:42:30
 */
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// 引入根reducers
import rootReducer from "../reducers/user";

const middlewares = [thunkMiddleware, createLogger()];

// 创建store
export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
