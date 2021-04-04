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
          variant="varavagar"
          title="Våra Vägar"
          image="varavagar.jpg"
          content="Map, information and maintenance needs for public roads of Sweden."
          href="https://www.varavagar.se"
        />
        <Card
          flip
          variant="climatevisualizer"
          title="Climate Visualizer"
          image="climatevisualizer.png"
          content="What the worlds carbon budget means on a local municipality level."
          href="https://www.climatevisualizer.com"
        />
        <Card
          variant="mozart"
          title="Mozart AI"
          image="wasmMozart.png"
          content="Neural net trained on mozart music brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmMozart/index.html"
        />
        <Card
          flip
          variant="shakespeare"
          title="Shakespeare AI"
          image="wasmShakespeare.png"
          content="Neural net trained on shakespeare text brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
        />
      </div>
    </div>
  );
}
