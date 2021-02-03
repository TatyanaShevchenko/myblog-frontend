import React from "react";
import { useStore } from 'react-redux'

import PostsPreview from "../article/preview/PostsPreview";
import RecentPosts from "../recent-posts/RecentPosts";
import Aside from "../aside/Aside";

import style from "./Content.module.scss";

const valueSelector = state => state.posts;
 const Content = ({getPosts}) => {

  const { getState } = useStore();
  const posts = valueSelector(getState());

  return (
    <div className={style.Content}>
      {posts.length !== 0 && (
        <div className={style.Content__Section}>
          <RecentPosts posts={posts} />
          <PostsPreview posts={posts} getPosts={getPosts}/>
        </div>
      )}
      <Aside posts={posts}/>
    </div>
  );
};

export default Content;

