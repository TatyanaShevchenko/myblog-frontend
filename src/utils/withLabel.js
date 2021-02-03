import React from "react";
import { useStore } from "react-redux";
import PostsPreview from "../components/article/preview/PostsPreview";

import style from "./Labels.module.scss";
const valueSelector = (state) => state.posts;

const WithLabel = ({ label }) => {
    const { getState } = useStore();
    const posts = valueSelector(getState());
  const TargetPosts = ({ posts }) => {
    let targetPosts = [];
    posts.forEach((post) => {
      post.post.forEach((item) => {
        if (item.__component === "post.info" && item.info_label === label) {
          targetPosts.push(post);
        }
      });
    });
    return <PostsPreview posts={targetPosts} />;
  };

  return (
    <div className={style.Label}>
      {posts.length !== 0 && <TargetPosts posts={posts} />}
    </div>
  );
};

export default WithLabel;
