import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();

    const openLinkInNewWindow = (linkUrl: string) => {
        window.open(linkUrl, "_blank", "width=700,height=600");
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navIcon} onClick={() => openLinkInNewWindow("https://cronoscan.com/token/0xE7F3c7C6611357313B5C2734341fe9cBad1D9f59")}>
                <Image src={"/cronos-icon.png"} alt="" width={31} height={41}/>
                <p className={styles.navIconLabel}>Cronos</p>
            </div>

            <div className={styles.navIcon} onClick={() => openLinkInNewWindow("https://dexscreener.com/cronos/0x172ef983f851bcdbf2a26a14756955a9c5954b7d")}>
                <Image src={"/dexScreener.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Liquidity</p>
            </div>

            <div className={styles.navIcon} onClick={() => openLinkInNewWindow("https://twitter.com/SycoticSociety")}>
                <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Twitter</p>
            </div>

            <div className={styles.navIcon} onClick={() => openLinkInNewWindow("https://sycotic-mint-apoc.vercel.app/")}>
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
