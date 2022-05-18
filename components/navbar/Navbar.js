import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <h1 className={styles.head}>Mixer</h1>
      </Link>

      <Link href="/explore">
        <button className={styles.btn}>Connect Wallet</button>
      </Link>
    </nav>
  );
};

export default Navbar;
