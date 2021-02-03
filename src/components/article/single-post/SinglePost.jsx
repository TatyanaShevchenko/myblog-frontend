import React from "react";
import { PostContent } from "../partials/PostContent";
import { PostGallery } from "../partials/PostGallery";
import { PostImage } from "../partials/PostImage";
import { PostInfo } from "../partials/PostInfo";
import { PostVideo } from "../partials/PostVideo";

import style from "./SinglePost.module.scss";

const SinglePost = ({ singlePost }) => {
  const { likes, title, comments } = singlePost;
  // let author, date, content, label, gallery, image, credits, video;

  return (
    <section className={style.SinglePost}>
      <div className={style.SinglePost__Container}>
      <p className={style.SinglePost__Title}>{title}</p>
      {singlePost.post.map((post) => {
        switch (post.__component) {
          case "post.info":
            return (
              <PostInfo
                author={post.info_author}
                date={post.info_date}
                label={post.info_label}
                comments={comments}
              />
            );
          case "post.content":
            return <PostContent content={post.content_text} />;
          case "post.gallery":
            return <PostGallery gallery={post.gallery_img} />;
          case "post.image":
            return (
              <PostImage image={post.image_img} credits={post.image_credits} />
            );
          case "post.video":
            return <PostVideo video={post.video_link} />;
          default:
            return;
        }
      })}
      </div>
    </section>
  );
};

export default SinglePost;
