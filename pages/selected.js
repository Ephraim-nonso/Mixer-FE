import React from "react";
import styles from "../styles/Selected.module.css";

const selected = () => {
  return (
    <div className={styles.container}>
      <div className={styles.time__indicator}>
        <p>***4days 16hours Left for upload***</p>
      </div>

      <div className={styles.selected}>
        <h5>Selected Addresses</h5>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
        <div className={styles.content}>
          <p>0x712***094***232</p>
          <p>Upload</p>
        </div>
      </div>
    </div>
  );
};

export default selected;
