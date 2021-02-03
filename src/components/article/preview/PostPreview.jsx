import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { ReactComponent as HeartReg } from "../../../images/icons/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../../images/icons/heart-solid.svg";

import style from "./PostPreview.module.scss";
import axios from "axios";
import { PostInfo } from "../partials/PostInfo";
import { PostContent } from "../partials/PostContent";

const inititalLocalStorage = localStorage.getItem("likedPosts");
const pureString = inititalLocalStorage.slice(1, -1);

function splitString(stringToSplit, separator) {
  const array = stringToSplit.split(separator);
  return array.map((element) => parseInt(element));
}

const comma = ",";
const likesArray = splitString(pureString, comma);

var allEntries = likesArray || [];

export const PostPreview = ({
  title,
  author,
  date,
  content,
  cover,
  comments,
  id,
  likes,
  slug,
  getPosts,
}) => {
  let contentPreview;
  if (!!content) {
    if (content.length > 1000) {
      contentPreview = content.substring(0, 1000) + "...";
    } else {
      contentPreview = content;
    }
  }

  const [isPostLiked, setIsPostLiked] = useState();

  const isPostAlreadyLiked = () => {
    let index = allEntries.indexOf(id);
    index === -1 ? setIsPostLiked(false) : setIsPostLiked(true);
  };

  useEffect(() => {
    isPostAlreadyLiked();
  }, []);

  const toggleLike = async (cb) => {
    let index = allEntries.indexOf(id);
    if (isPostLiked) {
      if (index !== -1) {
        allEntries.splice(index, 1);
      }
      localStorage.setItem("likedPosts", JSON.stringify(allEntries));
      const res = await axios.delete(`http://localhost:1337/likes/${id}`);
    } else {
      if (index === -1) {
        allEntries.push(id);
      }
      localStorage.setItem("likedPosts", JSON.stringify(allEntries));
      const res = await axios.post("http://localhost:1337/likes", {
        post: id,
      });
    }
    cb();
  };

  return (
    <section className={style.PostPreview}>
      <img
        src={`http://localhost:1337${cover}`}
        alt={title}
        className={style.PostPreview__Image}
      />

      <a
        href={`http://localhost:3000/posts/${slug}`}
        className={style.PostPreview__Title}
      >
        {title}
      </a>
      <PostInfo author={author} comments={comments} date={date} />

      <PostContent content={contentPreview} />

      <div
        onClick={async () => {
          toggleLike(getPosts);
          setIsPostLiked(!isPostLiked);
        }}
        className={style.PostPreview__Likes}
      >
        {!isPostLiked && <HeartReg className={style.PostPreview__LikesReg} />}
        {isPostLiked && (
          <HeartSolid className={style.PostPreview__LikesSolid} />
        )}
      </div>
      <span className={style.PostPreview__LikesNumber}>{likes}</span>
      <a
        className={style.PostPreview__LoadMore}
        href={`http://localhost:3000/posts/${slug}`}
      >
        Читать дальше
      </a>
    </section>
  );
};
