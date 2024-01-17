import React from "react";
import type { AppProps } from "next/app";
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

const activeChain = "Cronos";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="polygon"
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
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Navbar />
        <div className="minting-text"></div>
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
