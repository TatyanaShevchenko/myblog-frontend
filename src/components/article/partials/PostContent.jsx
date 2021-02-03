import React from "react";
import style from "./Partials.module.scss";

export const PostContent =({content})=>{
    return (
           <article className={style.Partial__Content}>{content}</article>
    )
}