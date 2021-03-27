import * as React from "react";
import * as styles from "./card.module.scss";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Card() {
  return (
    <div className={clsx(styles.card, border)}>
      <div>card image</div>
      <div>card text</div>
    </div>
  );
}
