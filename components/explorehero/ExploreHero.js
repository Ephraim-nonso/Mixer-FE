import React, { useContext } from "react";
import styles from "./ExploreHero.module.css";
import eHero from "../../assets/eHero.png";
import Image from "next/image";
import Link from "next/link";
import { Web3Context } from "../../context/Context";
import { Contract } from "ethers";
import ContractAbi from "../../utils/abi.json";
import { contractAddress } from "../../connector/Connector";

const ExploreHero = () => {
  const { wallet, provider } = useContext(Web3Context);

  const handleJoinContest = async () => {
    const contractInstance = new Contract(
      contractAddress,
      ContractAbi,
      provider
    );
    // const indicate = await contractInstance.indicate();
    // console.log(indicate);
    // console.log(provider.jsonRpcFetchFunc);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Image src={eHero} layout="fill" />
        </div>
        <div className={styles.content}>
          <h1>Entrance ends 12th May, 2022.</h1>
          <div className={styles.btn__wrapper}>
            <Link href="./listen">
              <button className={styles.btn}>Listen to Music</button>
            </Link>
            <Link href={wallet?.address != undefined ? "" : ""}>
              <button className={styles.btn} onClick={handleJoinContest}>
                Join Contest
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHero;
