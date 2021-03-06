import React, { useRef, useState, useContext } from "react";
import styles from "../styles/Selected.module.css";
import { Web3Storage } from "web3.storage";
import { Web3Context } from "../context/Context";
import Modal from "../components/modal/Modal";
import { Loader } from "rsuite";

const Selected = () => {
  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);
  const [fileUrl, updateFileUrl] = useState("");
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU4Q0RCMjc1ODNlZjdkMDdlZTQxNmZjQUM1MzM1NzgyMzdhOENiNzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDk1NDk3Nzc3ODQsIm5hbWUiOiJpbnZlc3RpZnkifQ.zywsJ0WgIN3eUJcLGyKhamGljTMvTqEIvMBAqw-z4oQ";
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    try {
      // Construct with token and endpoint
      const client = new Web3Storage({ token: API_TOKEN });
      // Pack files into a CAR and send to web3.storage
      const rootCid = await client.put([file]); // Promise<CIDString>
      // Get info on the Filecoin deals that the CID is stored in
      // const info = await client.status(rootCid); // Promise<Status | undefined>
      // Fetch and verify files from web3.storage
      const res = await client.get(rootCid); // Promise<Web3Response | null>
      const files = await res.files(); // Promise<Web3File[]>
      for (const file of files) {
        updateFileUrl(`ipfs://${file.cid}`);
        console.log(`${file.cid} ${file.name} ${file.size}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.time__indicator}>
        <p>***4days 16hours Left for upload***</p>
        <Loader />
      </div>

      {wallet?.address == undefined ? (
        <p className={styles.warn}>Connect your wallet</p>
      ) : null}

      <div className={styles.selected}>
        <h5>Selected Addresses</h5>
        <div className={styles.content}>
          <p>0x712***094***232</p>

          <input
            type="file"
            onChange={wallet?.address != undefined ? handleUpload : null}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            multiple
          />
          <p onClick={wallet?.address != undefined ? handleClick : null}>
            Upload
          </p>
        </div>
        <div className={styles.content}>
          <p>0x61a***094***232</p>
          <input
            type="file"
            onChange={wallet?.address != undefined ? handleUpload : null}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            multiple
          />
          <p onClick={wallet?.address != undefined ? handleClick : null}>
            Upload
          </p>
        </div>
        <div className={styles.content}>
          <p>0x815***094***232</p>
          <input
            type="file"
            onChange={wallet?.address != undefined ? handleUpload : null}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            multiple
          />
          <p onClick={wallet?.address != undefined ? handleClick : null}>
            Upload
          </p>
        </div>
        <div className={styles.content}>
          <p>0xb27***094***232</p>
          <input
            type="file"
            onChange={wallet?.address != undefined ? handleUpload : null}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            multiple
          />
          <p onClick={wallet?.address != undefined ? handleClick : null}>
            Upload
          </p>
        </div>
        <div className={styles.content}>
          <p>0xe14***094***232</p>
          <input
            type="file"
            onChange={wallet?.address != undefined ? handleUpload : null}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            multiple
          />
          <p onClick={wallet?.address != undefined ? handleClick : null}>
            Upload
          </p>
        </div>
      </div>

      {fileUrl != "" ? (
        <div className={styles.modal}>
          <Modal fileUrl={fileUrl} />
        </div>
      ) : null}
    </div>
  );
};

export default Selected;
