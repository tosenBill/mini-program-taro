/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-29 20:47:35
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-29 20:50:51
 */
import { SET_ALL_BANNER, SET_POST_FORM_IS_OPENED } from "../constants";

import avatar from "../images/avatar.png";

const INITIAL_STATE = {
  posts: [
    {
      title: "泰罗奥特曼",
      content: "泰罗是奥特之父和奥特之母唯一的亲生儿子",
      user: {
        nickName: "图雀酱",
        avatar,
      },
    },
  ],
  isOpened: false,
};

export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_BANNER: {
      const { post } = action.payload;
      return { ...state, posts: state.posts.concat(post) };
    }

    case SET_POST_FORM_IS_OPENED: {
      const { isOpened } = action.payload;

      return { ...state, isOpened };
    }

    default:
      return state;
  }
}
