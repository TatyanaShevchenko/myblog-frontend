import axios from "axios";

export const SET_POSTS = "SET_POSTS";


export const getPosts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:1337/posts").then(({ data }) => {
       const reversed = data.reverse();
       dispatch(setPosts(reversed));
    });
  };
};

const setPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data,
  };
};
