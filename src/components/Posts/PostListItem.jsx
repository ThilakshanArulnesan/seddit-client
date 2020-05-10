import React from 'react';
import styles from './PostListItem.module.scss';
import moment from 'moment';

const PostListItem = ({ post }) => {
  const { title, body, date, user } = post;
  console.log(post);
  return (
    <article className={styles.postContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.postMetaData}>
        <div className={styles.date}>
          {moment(date).format('hh:mmA ddd, MMM yyyy')}
        </div>
        {user?.name?.firstName && (
          <div className={styles.submittedBy}>
            Submitted by: {user.name.firstName}
          </div>
        )}
        <div className={styles.submittedBy}># Comments</div>
      </div>
      <p>{body}</p>
    </article>
  );
};

export default PostListItem;
