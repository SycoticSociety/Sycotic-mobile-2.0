import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Navbar() {
    const address = useAddress();

    // Function to open external links in a new window
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.navbar}>
            <div
                className={styles.navIcon}
                onClick={() => openInNewWindow("https://cronoscan.com/token/0x3e68ea1588e32e51d98dbda6ea05128513ecc713")}
            >
                <Image src={"/cronos-icon.png"} alt="" width={31} height={41}/>
                <p className={styles.navIconLabel}>Cronos</p>
            </div>

            <div
                className={styles.navIcon}
                onClick={() => openInNewWindow("https://dexscreener.com/cronos/0x9fb3fa7be9ca04efdfb43d8cd4ed38752187aaf5")}
            >
                <Image src={"/dexScreener.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Liquidity</p>
            </div>

            <div
                className={styles.navIcon}
                onClick={() => openInNewWindow("https://x.com/BrokeApeCronos?s=20")}
            >
                <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Twitter</p>
            </div>
            
            <div
                className={styles.navIcon}
                onClick={() => openInNewWindow("https://broke-ape-token-mint.vercel.app/")}
            >
                <Image src={"/nft-icon.png"} alt="" width={40} height={40}/>
                <p className={styles.navIconLabel}>Mint Now</p>
            </div>
            <div className={styles.navIcon}>
            {address && (
                <ConnectWallet
                    btnTitle="Login"
                    detailsBtn={() => {
                        return (
                            <div>
                                <Image src={"/profile-icon.png"} alt="" width={40} height={40}/>
                                <p className={styles.navIconLabel}>Profile</p>
                            </div>
                        )
                    }}
                />
            )}
            </div>
        </div>
    )
}
