import * as React from "react";
import Hero from "@components/Hero";
import * as styles from "./landingpage.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <div>landing page div text here</div>
      <Hero />
    </div>
  );
}
