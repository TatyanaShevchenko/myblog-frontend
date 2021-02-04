import React from "react";
import style from "./Partials.module.scss";

export const PostImage = ({ image, credits }) => {
  return (
    <div className={style.Partial__PostImage}>
      <img
        src={`http://localhost:1337${image.url}`}
        alt={image.alternativeText}
        className={style.Partial__Image}
      />
      <p className={style.Partial__Credits}>{credits}</p>
    </div>
  );
};
