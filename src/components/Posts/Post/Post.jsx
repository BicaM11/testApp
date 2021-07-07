import React from "react";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";
import "./post.styles.css";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-display">
      <p>First name: {post.firstname} </p>
      <p>Last name: {post.lastname} </p>
      <p>Email: {post.email} </p>
      <button onClick={() => dispatch(deletePost(post._id))}>&#10008;</button>
    </div>
  );
};

export default Post;
