import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();

    // Function to open external links in a new window
    const openInNewWindow = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.navbar}>
            <Link href="/cronos" passHref>
                <a className={styles.navIcon}>
                    <Image src={"/cronos-icon.png"} alt="" width={31} height={41} />
                    <p className={styles.navIconLabel}>Cronos</p>
                </a>
            </Link>

            <Link href="/liquidity" passHref>
                <a className={styles.navIcon}>
                    <Image src={"/dexScreener.png"} alt="" width={46} height={46} />
                    <p className={styles.navIconLabel}>Liquidity</p>
                </a>
            </Link>

            <Link href="/twitter" passHref>
                <a className={styles.navIcon}>
                    <Image src={"/claim-icon.png"} alt="" width={46} height={46} />
                    <p className={styles.navIconLabel}>Twitter</p>
                </a>
            </Link>

            <a
                href="https://broke-ape-token-mint.vercel.app/"
                className={styles.navIcon}
                onClick={(e) => {
                    e.preventDefault();
                    openInNewWindow("https://broke-ape-token-mint.vercel.app/");
                }}
            >
                <Image src={"/nft-icon.png"} alt="" width={40} height={40} />
                <p className={styles.navIconLabel}>Mint Now</p>
            </a>

            <div className={styles.navIcon}>
                {address && (
                    <ConnectWallet
                        btnTitle="Login"
                        detailsBtn={() => {
                            return (
                                <div>
                                    <Image src={"/profile-icon.png"} alt="" width={40} height={40} />
                                    <p className={styles.navIconLabel}>Profile</p>
                                </div>
                            );
                        }}
                    />
                )}
            </div>
        </div>
    );
}
