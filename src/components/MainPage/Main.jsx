import React from "react";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div id={styles.pageContainer}>
      <div class={styles.header}>
        <a href="/create">Create a post</a>
      </div>
      Hellos
    </div>
  );
}
