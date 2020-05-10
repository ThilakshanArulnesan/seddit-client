import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import PostList from '../Posts/PostList';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const connector = connect(mapStateToProps, { getPosts });

const Main = ({ isAuthenticated, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div id={styles.pageContainer}>
      <div class={styles.header}>
        {isAuthenticated && <a href="/create">Create a post</a>}
      </div>
      <PostList />
    </div>
  );
};
export default connector(Main);
