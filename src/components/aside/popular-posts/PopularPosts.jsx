import React from "react";

import { ReactComponent as HeartSolid } from "../../../images/icons/heart-solid.svg";

import style from "./PopularPosts.module.scss";

const PopularPosts = ({ posts }) => {
  let popularPosts = [];

  const sortPopularPosts = (allPosts) => {
    for (let i = 0, endI = allPosts.length - 1; i < endI; i++) {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (allPosts[j].likes < allPosts[j + 1].likes) {
          var swap = allPosts[j];
          allPosts[j] = allPosts[j + 1];
          allPosts[j + 1] = swap;
        }
      }
    }
    return allPosts;
  };

  const sortedPosts = sortPopularPosts(posts);
  for (let i = 0; i < 5; i++) {
    popularPosts[i] = sortedPosts[i];
  }

  return (
    <div className={style.PopularPosts}>
      <div className={style.PopularPosts_Title}>популярное</div>
      <div className={style.PopularPosts_Posts}>
        {popularPosts.length !== 0 &&
          popularPosts.map((popularPost) => {
            let cover;
            const { id, likes, title, slug } = popularPost;
            popularPost.post.forEach((post) => {
              switch (post.__component) {
                case "post.cover":
                  cover = post.cover_img.url;
                  return;
                default:
                  return;
              }
            });
            return (
              <PopularPost
                key={id}
                id={id}
                cover={cover}
                title={title}
                likes={likes}
                slug={slug}
              />
            );
          })}
      </div>
    </div>
  );
};

const PopularPost = ({ cover, title, id, likes, slug }) => {
  return (
    <div className={style.PopularPost}>
      <a href={`/posts/${slug}`} className={style.RecentPostImage__Link}>
        <div className={style.PopularPosts__Item}>
          <div className={style.PopularPosts__ItemImageContainer}>
            <img
              src={`http://localhost:1337${cover}`}
              className={style.PopularPosts__ItemImage}
              alt={title}
            />
          </div>
          <div className={style.PopularPosts__ItemLikesContainer}>
            <HeartSolid className={style.PopularPosts__ItemLikesBG} />
            <p className={style.PopularPosts__ItemLikes}>{likes}</p>
          </div>

          <p className={style.PopularPosts__ItemTitle}>{title}</p>
        </div>
      </a>
    </div>
  );
};

export default PopularPosts;
