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
    window.location.href = "https://broke-ape-cc-moblie.vercel.app/";
  };

  return (
    <div className={styles.container}>
      <a href="#" onClick={handleImageClick}>
        <img
          src=" /images/Thirdweb-Icon-Circle-Black-08 1.gif " // Replace with your image URL
          alt="Image Description"
        />
      </a>
    </div>
  );
};

export default Home;
