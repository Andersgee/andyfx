import * as React from "react";
import * as styles from "./cards.module.scss";
import Card from "@components/Card";
import useImages from "@hooks/useImages";

export default function Cards() {
  const images = useImages();

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h2 className={styles.heading}>Latest Projects</h2>
        <Card
          variant="julia2wat"
          title="julia2wat"
          image={images.julia2wat}
          content="Online version of WebAssemblyText.jl: Convert Julia to WebAssembly text."
          href="https://julia2wat.herokuapp.com/"
        />
        <Card
          flip
          variant="weather"
          title="Weather"
          image={images.weather}
          content="Weather forecast in both visual and table format."
          href="https://weather.andyfx.net"
        />
        <Card
          variant="varavagar"
          title="Våra Vägar"
          image={images.varavagar}
          content="Map, information and maintenance needs for public roads of Sweden."
          href="https://www.varavagar.se"
        />
        <Card
          flip
          variant="climatevisualizer"
          title="Climate Visualizer"
          image={images.climatevisualizer}
          content="What the worlds carbon budget means on a local municipality level."
          href="https://www.climatevisualizer.com"
        />
        <Card
          variant="mozart"
          title="Mozart AI"
          image={images.wasmMozart}
          content="Neural net trained on mozart music brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmMozart/index.html"
        />
        <Card
          flip
          variant="shakespeare"
          title="Shakespeare AI"
          image={images.wasmShakespeare}
          content="Neural net trained on shakespeare text brought to the web with webassembly."
          href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
        />
      </div>
    </div>
  );
}
