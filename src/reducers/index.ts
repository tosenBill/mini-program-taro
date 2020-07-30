/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-29 20:54:17
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-29 20:54:34
 */
import { combineReducers } from "redux";

import user from "./user";
import bannerAll from "./bannerAll";

export default combineReducers({
  user,
  bannerAll,
});
