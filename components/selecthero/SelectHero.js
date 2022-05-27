import React, { useContext, useState } from "react";
import styles from "./SelectHero.module.css";
import eHero from "../../assets/eHero.png";
import Image from "next/image";
import Link from "next/link";
import { Web3Context } from "../../context/Context";
import { Contract, ethers } from "ethers";
import ContractAbi from "../../utils/abi.json";
import { contractAddress } from "../../connector/Connector";

const SelectHero = () => {
  const [isValid, setIsValid] = useState(false);
  const { wallet } = useContext(Web3Context);

  const handleJoinContest = async () => {
    setIsValid(true);

    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = myProvider.getSigner();

    const contractInstance = new Contract(contractAddress, ContractAbi, signer);
    console.log(contractInstance);
    console.log(ContractAbi);
    console.log(signer);

    const indicate = await contractInstance.upload();
    console.log(indicate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <Image src={eHero} layout="fill" />
        </div>
        <div className={styles.content}>
          <h1>Entrance Date Elapsed.</h1>
          <div className={styles.btn__wrapper}>
            <Link href="./listen">
              <button className={styles.btn}>Listen to Music</button>
            </Link>
            <Link href={wallet?.address != undefined ? "./selected" : ""}>
              <button className={styles.btn} onClick={handleJoinContest}>
                Selected Users
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectHero;
