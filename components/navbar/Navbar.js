import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.head}>Mixer</h1>
      <button className={styles.btn}>Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
