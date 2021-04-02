import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";
//import { border } from "@styles/border.module.scss";
//import clsx from "clsx";

export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h2 className={styles.heading}>Latest Projects</h2>
        <Card
          variant="a"
          title="wasmMozart"
          image="wasmMozart.png"
          content="Neural net trained on mozart music brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmMozart/index.html"
        />
        <Card
          flip
          variant="b"
          title="wasmShakespeare"
          image="wasmShakespeare.png"
          content="Neural net trained on shakespeare text brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
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
