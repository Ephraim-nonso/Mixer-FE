import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "../../assets/hero.png";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";

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
    content: "Unleash It. It's in you.",
  },
];

const Hero = () => {
  return (
    <div className={styles.container}>
      {images.map((item) => {
        return (
          <div key={item.id}>
            <Image src={item.img} alt={item.desc} width="500" height="650" />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
