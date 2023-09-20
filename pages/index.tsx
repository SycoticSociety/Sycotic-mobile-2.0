// Home.tsx
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

  return (
    <div className={styles.container}>
      {address ? (
        <div className={styles.nftClaim}>
          <MediaRenderer
            src={contractMetadata?.image}
            width="auto"
            height="50%"
            style={{
              borderRadius: "20px",
              maxWidth: "600px",
            }}
          />
          <h1>{contractMetadata?.name}</h1>
          <ConnectWallet btnTitle="Login" className={styles.connectWalletButton} /> {/* Apply the CSS class here */}
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <ConnectWallet btnTitle="Login" className={styles.connectWalletButton} /> {/* Apply the CSS class here */}
        </div>
      )}
    </div>
  );
};

export default Home;
