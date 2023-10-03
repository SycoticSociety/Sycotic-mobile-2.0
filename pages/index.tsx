import React from "react";
import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);

  const handleImageClick = () => {
    // Redirect to the specified URL when the image is clicked
    window.location.href = "https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713";
  };

  return (
    <div className={styles.container} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <a href="#" onClick={handleImageClick}>
        <div style={{ position: "relative", width: "75%", height: "75%" }}>
          <img
            src="/images/Thirdweb-Icon-Circle-Black-08 1.gif" // Replace with your image URL
            alt="Image Description"
            style={{ width: "100%", height: "100%" }}
          />
          <div style={{ position: "absolute", bottom: "30px", left: "0", right: "0", textAlign: "center", background: "rgba(0, 0, 0, 0.7)", color: "white", fontSize: "20px" }}>
            Click to Buy
          </div>
        </div>
      </a>
    </div>
  );
};

export default Home;
