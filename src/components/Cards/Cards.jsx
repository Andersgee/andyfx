import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";
import { border } from "@styles/border.module.scss";
import clsx from "clsx";

export default function Cards() {
  return (
    <div className={clsx(styles.cards, border)}>
      <h2>Our Latest Works</h2>
      <Card
        variant="a"
        title="Redesigning Stuff.se"
        content="Illustration, Web Design"
      />
      <Card
        variant="b"
        title="Redesigning Stuff.se"
        content="Illustration, Web Design"
      />
      <Card
        variant="c"
        title="Redesigning Stuff.se"
        content="Illustration, Web Design"
      />
    </div>
  );
}
