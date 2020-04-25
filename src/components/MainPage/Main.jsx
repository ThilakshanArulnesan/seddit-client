import React from "react";
import styles from "./Main.module.scss";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const connector = connect(mapStateToProps);

const Main = ({ isAuthenticated }) => {
  return (
    <div id={styles.pageContainer}>
      <div class={styles.header}>
        {isAuthenticated && <a href="/create">Create a post</a>}
      </div>
    </div>
  );
};
export default connector(Main);
