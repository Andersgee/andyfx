import * as React from "react";
import * as styles from "./card.module.scss";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";
import Button from "./Button";

export default function Card({ title, content, variant }) {
  return (
    <div className={clsx(styles.card)}>
      <div className={clsx(styles.cardimage, border)}>card image</div>
      <div className={styles.cardcontent}>
        <h2>{title}</h2>
        <div>{content}</div>
        <Button variant={variant} />
      </div>
    </div>
  );
}
