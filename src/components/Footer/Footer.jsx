import * as React from "react";
import * as styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <a href="mailto:andersgee@gmail.com">andersgee@gmail.com</a>
      </div>
      {/*
      <div className={styles.about}>
        <h2>About</h2>
        <a href="https://github.com/andersgee/">github</a>
        <div>item2: content2</div>
      </div>
      */}
    </div>
  );
}
