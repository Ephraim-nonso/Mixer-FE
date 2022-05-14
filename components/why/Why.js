import React from "react";
import styles from "./Why.module.css";
import Acc from "../../assets/a.png";
import Image from "next/image";

const contents = [
  {
    id: 1,
    head: "No Barrier",
    body: "Mixer is open to everyone, there is no barrier to entry for anybody irrespective of race and gender.",
  },
  {
    id: 2,
    head: "Decentralized",
    body: "There is no central authority , every decision is based on the smart contract, no outsider influence.",
  },
  {
    id: 3,
    head: "Wider Reach",
    body: "Mixler is truly borderless and there is no limit to your reach, get you sound abroad for everyone to feel.",
  },
  {
    id: 4,
    head: "Extra Income",
    body: "Are you in need of extra money with no limit, mixer is the right place for you.",
  },
];

const Why = () => {
  return (
    <div className={styles.container}>
      <h3 id={styles.head}>Why Use Mixer?</h3>

      <section className={styles.wrapper}>
        <div>
          <Image src={Acc} alt="Leveller" />
        </div>

        <div className={styles.content}>
          {contents.map((item) => {
            return (
              <div key={item.id} className={styles.single}>
                <h5>{item.head}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Why;
