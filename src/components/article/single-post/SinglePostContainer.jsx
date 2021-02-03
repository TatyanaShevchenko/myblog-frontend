import React from "react";
import { useParams } from "react-router";
import { NotFound } from "../../not-found/NotFound";
import SinglePost from "./SinglePost";

const SinglePostContainer = ({ posts, getPosts }) => {
  var { slug } = useParams();
  let singlePost;
  let post;
  if (!!posts) {
    singlePost = posts.filter((post) => post.slug === slug);
  }

  if (singlePost.length > 0) {
    post = singlePost[0];
    return <SinglePost singlePost={post} />;
  } else {
    return <NotFound />;
  }
};

export default SinglePostContainer;
