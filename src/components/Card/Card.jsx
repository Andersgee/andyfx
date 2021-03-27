import * as React from "react";
import * as styles from "./card.module.scss";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Card({ title, content }) {
  return (
    <div className={clsx(styles.card)}>
      <div className={clsx(styles.cardimage, border)}>card image</div>
      <div className={styles.cardcontent}>
        <h2>{title}</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}
