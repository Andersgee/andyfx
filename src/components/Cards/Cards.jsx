import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Cards() {
  return (
    <div className={clsx(styles.cards, border)}>
      <h1>Our Latest Works</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
