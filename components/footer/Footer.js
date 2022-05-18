import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <ul>
          <li>About</li>
          <li>Medium</li>
          <li>Discord</li>
          <li>Twitter</li>
          <li>Redit</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Developers</li>
          <li>Github</li>
          <li>Docs</li>
          <li>Dev Channel</li>
          <li>Bug Bounty</li>
        </ul>
        <ul>
          <li>Product</li>
          <li>Governance</li>
        </ul>
      </div>

      <div className={styles.second}>
        <h1>Mixer</h1>
        <p>Copyright</p>
        <p>2022</p>
      </div>
    </div>
  );
};

export default Footer;
