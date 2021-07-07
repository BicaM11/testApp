import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return !posts.length ? (
    <p>There is nothing to display.</p>
  ) : (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
