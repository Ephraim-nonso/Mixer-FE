import React from "react";
import styles from "./ExploreHero.module.css";
import eHero from "../../assets/eHero.png";
import Image from "next/image";
import Link from "next/link";

const ExploreHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Image src={eHero} layout="fill" />
        </div>
        <div className={styles.content}>
          <h1>Entrance ends 12th May, 2022.</h1>
          <div className={styles.btn__wrapper}>
            <Link href="./listen">
              <button className={styles.btn}>Listen to Music</button>
            </Link>
            <Link href="./selected">
              <button className={styles.btn}>Join Contest</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHero;
