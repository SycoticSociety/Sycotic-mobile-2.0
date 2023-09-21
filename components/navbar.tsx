import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Navbar() {
    const address = useAddress();
    return (
        <div className={styles.navbar}>
            <a href="https://cronoscan.com/token/0x3e68ea1588e32e51d98dbda6ea05128513ecc713" target="_blank" className={styles.navIcon}>
                <Image src={"/cronos-icon.png"} alt="" width={31} height={41}/>
                <p className={styles.navIconLabel}>Cronos</p>
            </a>

            <a href="https://dexscreener.com/cronos/0x9fb3fa7be9ca04efdfb43d8cd4ed38752187aaf5" target="_blank" className={styles.navIcon}>
                <Image src={"/dexScreener.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Liquidity</p>
            </a>

            <a href="https://x.com/BrokeApeCronos?s=20" target="_blank" className={styles.navIcon}>
                <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Twitter</p>
            </a>
            
            <a href="https://broke-ape-token-mint.vercel.app/" target="_blank" className={styles.navIcon}>
                <Image src={"/nft-icon.png"} alt="" width={40} height={40}/>
                <p className={styles.navIconLabel}>Mint Now</p>
            </a>
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
