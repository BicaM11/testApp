import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import "./form.styles.css";

const Form = ({ setCurrentId }) => {
  const [postData, setPostData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);

    setPostData({ firstname: "", lastname: "", email: "" });
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Please fill out your contact info:</h3>

        <div className="form">
          <input
            name="firstname"
            label="FirstName"
            placeholder="First name"
            required
            value={postData.firstname}
            onChange={(e) =>
              setPostData({ ...postData, firstname: e.target.value })
            }
          />
          <input
            name="lastname"
            label="LastName"
            placeholder="Last name"
            required
            value={postData.lastname}
            onChange={(e) =>
              setPostData({ ...postData, lastname: e.target.value })
            }
          />
          <input
            name="Email"
            placeholder="Email"
            label="Email"
            type="email"
            required
            value={postData.email}
            onChange={(e) =>
              setPostData({ ...postData, email: e.target.value })
            }
          />

          <div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
