import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();

    // Function to open external links in a new window
    const openInNewWindow = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.navbar}>
            <Link href="https://cronoscan.com/token/0x3e68ea1588e32e51d98dbda6ea05128513ecc713">
                <a className={styles.navIcon} onClick={(e) => e.preventDefault()}>
                    <Image src={"/cronos-icon.png"} alt="" width={31} height={41}/>
                    <p className={styles.navIconLabel}>Cronos</p>
                </a>
            </Link>

            <Link href="https://dexscreener.com/cronos/0x9fb3fa7be9ca04efdfb43d8cd4ed38752187aaf5">
                <a className={styles.navIcon} onClick={(e) => e.preventDefault()}>
                    <Image src={"/dexScreener.png"} alt="" width={46} height={46}/>
                    <p className={styles.navIconLabel}>Liquidity</p>
                </a>
            </Link>

            <Link href="https://x.com/BrokeApeCronos?s=20">
                <a className={styles.navIcon} onClick={(e) => e.preventDefault()}>
                    <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                    <p className={styles.navIconLabel}>Twitter</p>
                </a>
            </Link>
            
            <Link href="https://broke-ape-token-mint.vercel.app/">
                <a className={styles.navIcon} onClick={(e) => e.preventDefault()}>
                    <Image src={"/nft-icon.png"} alt="" width={40} height={40}/>
                    <p className={styles.navIconLabel}>Mint Now</p>
                </a>
            </Link>
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
