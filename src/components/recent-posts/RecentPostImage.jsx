import React from "react";

import style from "./RecentPostImage.module.scss";

export const RecentPostImage = ({ cover, title, id, label, slug }) => {
  return (
    <div className={style.RecentPostImage}>
        <a href={`/posts/${slug}`} className={style.RecentPostImage__Link}>
          <div className={style.RecentPostImage__Overlay}></div>
          <p className={style.RecentPostImage__Title}>{title}</p>
          <a href={`/${label}`} className={style.RecentPostImage__Label}>{label}</a>
          <img
            src={`http://localhost:1337${cover}`}
            alt={title}
            className={style.RecentPostImage_Image}
          />
        </a>
    </div>
  );
};
