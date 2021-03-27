import * as React from "react";
import Hero from "@components/Hero";
import * as styles from "./landingpage.module.scss";
import Cards from "@components/Cards";

export default function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <Hero />
      <Cards />
      <div>landing page bottom</div>
    </div>
  );
}
