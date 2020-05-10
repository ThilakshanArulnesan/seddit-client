import React from 'react';
import styles from './PostListItem.module.scss';

const PostListItem = ({ post }) => {
  return (
    <article className={styles.postContainer}>
      <h1>Title here</h1>
      <p>Content here</p>
    </article>
  );
};

export default PostListItem;
