import React, { useState } from "react";
import styles from "./Modal.module.css";
import { FaHandPointDown } from "react-icons/fa";

const Modal = ({ fileUrl }) => {
  const [isClose, setIsClose] = useState(false);
  console.log(fileUrl);
  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <div className={isClose ? styles.hideContainer : styles.container}>
      <h4>
        Click link to view upload.
        <FaHandPointDown />
      </h4>
      <p className={styles.link}>
        <a href={fileUrl} className={styles.linkGuy}>
          {fileUrl}
        </a>
      </p>
      <p className={styles.close} onClick={handleClose}>
        Close
      </p>
    </div>
  );
};

export default Modal;
