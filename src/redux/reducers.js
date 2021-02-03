import { SET_POSTS } from "./actions";

const initialState = {
  posts: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
