import * as React from "react";
import * as styles from "./card.module.scss";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";
import Button from "./Button";

export default function Card({ title, content, variant, href }) {
  return (
    <div className={clsx(styles.card)}>
      <img src="/images/metal.jpg" className={clsx(styles.cardimage, border)} />
      <div className={styles.cardcontent}>
        <div>
          <h2>{title}</h2>
          <div>{content}</div>
        </div>
        <Button variant={variant} href={href} />
      </div>
    </div>
  );
}
