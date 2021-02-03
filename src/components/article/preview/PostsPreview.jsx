import React from "react";
import { PostPreview } from "./PostPreview";

const PostsPreview = ({ posts,getPosts }) => {
  return (
    <div>
      {!!posts &&
        posts.map((post) => {
          const { id, likes, title, slug } = post;
          let cover, author, date, content, label;
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
                content = post.content_text;
                return;
              default:
                return;  
            }
          });
         return <PostPreview
            id={id}
            key={id}
            likes={likes}
            title={title}
            author={author}
            comments={"10"}
            date={date}
            content={content}
            cover={cover}
            label={label}
            slug={slug}
            getPosts={getPosts}
          />;
        })}
    </div>
  );
};

export default PostsPreview;
