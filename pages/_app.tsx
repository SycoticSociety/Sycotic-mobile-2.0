import type { AppProps } from "next/app";
import iframeStyles from './iframeStyle.module.css';
import styles from './Home.module.css'; // Import the CSS module
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

const activeChain = "polygon";

function IframeComponent() {
  return (
    <iframe
      className={iframeStyles.iframe} {/* Add this className */}
      src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0x6a48204814243E8bC0e31b2286d02FcA51248DB2&chain=%7B%22name%22%3A%22Cronos+Mainnet%22%2C%22chain%22%3A%22CRO%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcronos.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Cronos%22%2C%22symbol%22%3A%22CRO%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22cro%22%2C%22chainId%22%3A25%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22cronos%22%7D&clientId=3fbb4107fe615d1b91b5c92ae87414b6&tokenId=0&theme=dark&primaryColor=orange"
      width="600px"
      height="600px"
      style={{ maxWidth: '100%' }}
      frameBorder="0"
      title="Embedded iframe"
    ></iframe>
  );
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="690261969c7023f7bfee4aae4dba4425"
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        paperWallet({
          paperClientId: "5c6a293d-21bd-4c8b-bc08-f722ea5168a6",
        }),
      ]}
    >
      <Header />
    
      <div className={iframeStyles.container}>
        <IframeComponent />
      </div>
      
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
