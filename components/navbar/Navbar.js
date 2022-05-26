import React, { useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { addressShortner } from "../../utils/helper";

import { Web3Context } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);

  const handleConnect = () => {
    connect();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  useEffect(() => {}, []);

  return (
    <nav className={styles.container}>
      <Link href="/">
        <h1 className={styles.head}>Mixer</h1>
      </Link>

      <div className={styles.btns}>
        <button className={styles.btn} onClick={handleConnect}>
          {!!wallet ? addressShortner(wallet.address) : "Connect Wallet"}
        </button>

        {!!wallet ? (
          <button className={styles.dbtn} onClick={handleDisconnect}>
            Disconnect Wallet
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
