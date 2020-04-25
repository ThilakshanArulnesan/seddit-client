import React, { useState } from "react";
import styles from "./CreatePost.module.scss";
import Button from "@material-ui/core/Button/Button";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    console.log(title, body);
    // TO DO : Send post request.
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
}
