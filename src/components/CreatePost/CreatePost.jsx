import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./CreatePost.module.scss";
import Button from "@material-ui/core/Button/Button";
import { createPost } from "../../actions/postActions";

const CreatePost = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    console.log("hello");
    createPost({ name: title });
  };

  return (
    <div id={styles.container}>
      <form className={styles.form} action="POST">
        <label htmlFor="title" className={styles.formLabel}>
          Post Title
        </label>
        <input type="title" />
        <label
          htmlFor="title"
          className={styles.formLabel}
          value={title}
          onChange={e => setTitle(e.target.value)}
        >
          Body
        </label>
        <textarea
          name="body"
          id={styles.bodytext}
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      <div className={styles.warningText}>Please enter a title and body</div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  createPost
})(CreatePost);
