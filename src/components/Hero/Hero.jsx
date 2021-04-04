import * as React from "react";
import * as styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.placeholderhero}>
      <img className={styles.logo} src="/images/logo/andyfx.png" />
      <h1 className={styles.andyfx}>Andyfx</h1>

      {/*<div></div>*/}
    </div>
  );
}
