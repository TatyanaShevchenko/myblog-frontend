import React from "react";
import PopularPosts from "./popular-posts/PopularPosts";
import Labels from "./labels/Labels";

import style from "./Aside.module.scss";

const Aside = ({ posts }) => {
  return (
    <>
      {posts.length !== 0 && (
        <div className={style.Aside}>
          <PopularPosts posts={posts} />
          <Labels posts={posts} />
        </div>
      )}
    </>
  );
};

export default Aside;
