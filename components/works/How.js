import React from "react";
import styles from "./How.module.css";
import Image from "next/image";
import time from "../../assets/t.png";
import mixer from "../../assets/m.png";
import s from "../../assets/s.png";
import p from "../../assets/p.png";

const contents = [
  {
    id: 1,
    head: "Indicate your interest",
    body: "Users can get access by indicating interest, right from their smart phones with no hassle.",
    img: time,
  },
  {
    id: 2,
    head: "Selection Process",
    body: "Mixer is a truly decentralized platform with no external or centralized authority everybody stands an equal chance . By using chainlink random number generator technique, we select singers randomly.",
    img: mixer,
  },
  {
    id: 3,
    head: "Upload your Song",
    body: "Only addresses which are among the lucky selections are allowed to upload their songs for listeners to interact with.",
    img: p,
  },
  {
    id: 4,
    head: "Earn Money and Exposure",
    body: "When listeners love your song over time, you tend to generate more money from streams directly and also they can tip you.",
    img: s,
  },
];

const How = () => {
  return (
    <div className={styles.container}>
      <h3 id={styles.head}>How Mixer Works</h3>

      <section className={styles.wrapper}>
        {contents.map((item) => {
          return (
            <div key={item.id} className={styles.flex}>
              <div className={styles.content}>
                <h5>{item.head}</h5>
                <p>{item.body}</p>
              </div>
              <div className={styles.img}>
                <Image src={item.img} alt="Indicates" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default How;
