import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Cards() {
  return (
    <div className={clsx(styles.container, border)}>
      <div className={styles.cards}>
        <h2 className={styles.heading}>Latest Works</h2>
        <Card
          variant="a"
          title="Stuff.se"
          content="Simple project description"
          href="https://www.google.se"
        />
        <Card
          flip
          variant="b"
          title="Stuff.se"
          content="Simple project description"
          href="https://www.climatevisualizer.com"
        />
        <Card
          variant="c"
          title="Stuff.se"
          content="Simple project description"
          href="https://www.google.se"
        />
      </div>
    </div>
  );
}
