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
    window.open("https://swap.crodex.app/#/swap?outputCurrency=0x4E2E7700C8f8A414b4AF8828f54330a304B6625d", "_blank", "width=700,height=600");
  };

  return (
    <div className={styles.container} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <a href="#" onClick={handleImageClick}>
        <div style={{ position: "relative", width: "35%", height: "35%", left: "155px", marginTop: "60px" }}> {/* Added marginTop */}
          <img
            src="/images/Thirdweb-Icon-Circle-Black-08 1 (3).gif" // Replace with your image URL
            alt="Image Description"
            style={{ width: "100%", height: "100%" }}
          />
          <div style={{ position: "absolute", bottom: "30px", left: "0", right: "0", textAlign: "center", color: "white", fontSize: "20px" }}>
            Click to Buy
          </div>
        </div>
      </a>
    </div>
  );
};

export default Home;
