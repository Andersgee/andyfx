import * as React from "react";
import * as styles from "./card.module.scss";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Card() {
  return (
    <div className={clsx(styles.card, border)}>
      <div className={clsx(styles.cardimage, border)}>card image</div>
      <div className={styles.cardcontent}>
        <h2>Redesigning Stuff.se</h2>
      </div>
    </div>
  );
}
