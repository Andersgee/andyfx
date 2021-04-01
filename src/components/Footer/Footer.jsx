import * as React from "react";
import * as styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <div>item1: content1</div>
        <div>item2: content2</div>
      </div>
      <div className={styles.about}>
        <h2>About</h2>
        <div>item1: content1</div>
        <div>item2: content2</div>
      </div>
    </div>
  );
}
