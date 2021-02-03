import React from "react";

import { RecentPostImage } from "./RecentPostImage";

import style from "./RecentPosts.module.scss";

const RecentPosts = ({ posts }) => {
  let fiveRecentPosts = [];
  if (posts) {
    for (let i = 0; i < 5; i++) {
      fiveRecentPosts.push(posts[i]);
    }
  }

  return (
    <>
      {fiveRecentPosts.length !== 0 && (
        <div className={style.RecentPosts}>
          {fiveRecentPosts.map((item) => {
            let cover, label;
            const {id, title, slug} = item;
            item.post.forEach((post) => {
              switch (post.__component) {
                case "post.cover":
                  cover = post.cover_img.url;
                  return;
                case "post.info":
                  label = post.info_label;
                  return;
                default:
                  return;
              }
            });

            return (
              <RecentPostImage
                key={id}
                id={id}
                cover={cover}
                title={title}
                label={label}
                slug={slug}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default RecentPosts;
