import React from "react";
import styles from "./Songs.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { BsFillCircleFill } from "react-icons/bs";
import { contractAddress } from "../../connector/Connector";
import ContractAbi from "../../utils/abi.json";
import { ethers, Contract } from "ethers";

const music = [
  {
    id: 1,
    name: "FullyRabbit",
    color: "#C24CAA",
  },
  {
    id: 2,
    name: "BeigeGoat",
    color: "#201E42",
  },
  {
    id: 3,
    name: "CurlyFry",
    color: "##DB2A2A",
  },
  {
    id: 4,
    name: "FullyDog",
    color: "#E5E5E5",
  },
  {
    id: 5,
    name: "PillyHen",
    color: "#423A1E",
  },
  {
    id: 6,
    name: "BeigeCow",
    color: "#87C24C",
  },
];

const Songs = () => {
  const handleTip = async () => {
    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = myProvider.getSigner();

    const contractInstance = new Contract(contractAddress, ContractAbi, signer);
    console.log(contractInstance);

    const tip = await contractInstance.tip(
      "0xf18be8A5FcBD320fDe04843954c1c1A155b9Ae2b",
      "1000"
    );
    console.log(tip);
  };

  return (
    <div className={styles.container}>
      {music.map((item) => {
        return (
          <div key={item.id} className={styles.flex}>
            <div className={styles.details}>
              <div>
                <BsFillCircleFill color={item.color} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>0x712***094***232</p>
              </div>
            </div>

            <div className={styles.options}>
              <div className={styles.play}>
                <AiFillPlayCircle
                  color="#DB2A2A"
                  size={24}
                  className={styles.icon}
                />

                <p>Play</p>
              </div>
              <div className={styles.tip}>
                <RiMoneyDollarCircleLine
                  size={24}
                  className={styles.icon}
                  onClick={handleTip}
                />

                <p>Tip</p>
              </div>
              <div className={styles.views}>
                <GrView size={24} className={styles.icon} />
                <p>Views</p>
              </div>
              <div className={styles.link}>
                <AiOutlineLink size={24} className={styles.icon} />
                <p>Generate Link</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* <ReactAudioPlayer src={audio} controls autoPlay /> */}
    </div>
  );
};

export default Songs;
