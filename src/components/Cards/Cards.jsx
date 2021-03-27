import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
