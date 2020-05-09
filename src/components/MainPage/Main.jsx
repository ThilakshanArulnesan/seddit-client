import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
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
    </div>
  );
};
export default connector(Main);
