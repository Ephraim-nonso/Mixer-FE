import React, { useState, useContext, useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "../../assets/hero.png";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";
import Link from "next/link";
import { Web3Context } from "../../context/Context";

const images = [
  {
    id: 1,
    img: hero,
    desc: "Headset",
  },
  {
    id: 3,
    img: Hero2,
    desc: "Singing Lady",
  },
  {
    id: 2,
    img: Hero1,
    desc: "Headset down",
    content: "Unleash It. It's in",
    other: "you.",
    btn: "Start contest",
  },
];

const Hero = () => {
  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);
  console.log(wallet);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!!wallet?.address) {
      setIsValid(false);
    }
  }, []);

  const handleNext = () => {
    setIsValid(true);
    console.log(wallet?.address);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.single}>
          <Image src={hero} alt="Headset" width="500" height="650" />
          <div className={styles.contents}>
            <p></p>
            <p className={styles.others}></p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.single}>
          <Image src={Hero2} alt="Singing Lady" width="500" height="650" />
          <div className={styles.contents}>
            <p></p>
            <p className={styles.others}></p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.single}>
          <Image src={Hero1} alt="Headset down" width="500" height="650" />
          <div className={styles.contents}>
            <p>Unleash It. It/'s in</p>
            <p className={styles.others}>You</p>
            <Link href={wallet?.address != undefined ? "./explore" : ""}>
              <button className={styles.btn} onClick={handleNext}>
                Start Contest
              </button>
            </Link>
            {isValid ? (
              <span className={styles.span}>Please connect your wallet.</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
