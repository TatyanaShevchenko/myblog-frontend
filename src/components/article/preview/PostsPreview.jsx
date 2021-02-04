import React from "react";
import { PostContent } from "../partials/PostContent";
import { PostInfo } from "../partials/PostInfo";
import { PostPreview } from "./PostPreview";

const PostsPreview = ({ posts, getPosts }) => {
  return (
    <div>
      {!!posts &&
        posts.map((post) => {
          const { id, likes, title, slug } = post;
          let cover, author, date, label;
          let content = [];
          post.post.forEach((post) => {
            switch (post.__component) {
              case "post.cover":
                cover = post.cover_img.url;
                return;
              case "post.info":
                author = post.info_author;
                date = post.info_date;
                label = post.info_label;
                return;
              case "post.content":
                content.push(post.content_text);
                return;
              default:
                return;
            }
          });

          console.log("content", content);
          return (
            <div>
              <PostPreview
                id={id}
                key={id}
                likes={likes}
                title={title}
                author={author}
                comments={"10"}
                date={date}
                content={content[0]}
                cover={cover}
                label={label}
                slug={slug}
                getPosts={getPosts}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PostsPreview;
