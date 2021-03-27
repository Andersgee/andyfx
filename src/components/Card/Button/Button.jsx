import * as React from "react";
import * as styles from "./button.module.scss";
import clsx from "clsx";

export default function Button({ variant }) {
  const v = variant || "a";
  return (
    <button className={clsx(styles.button, styles[v])}>View Project</button>
  );
}
