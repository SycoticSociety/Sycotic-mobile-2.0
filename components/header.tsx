import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    const openLinkInNewWindow = (linkUrl: string) => {
        window.open(linkUrl, "_blank", "width=700,height=600");
    };

    return (
        <div className={styles.header}>
            <a onClick={() => openLinkInNewWindow("https://swap.crodex.app/#/swap?outputCurrency=0xE7F3c7C6611357313B5C2734341fe9cBad1D9f59")} style={{ cursor: 'pointer' }}>
                <Image src={"/images/Thirdweb-Icon-Circle-Black-08 1 (3).gif"} alt="" height={50} width={50}/>
            </a>
            <p style={{ fontSize: 'larger' }}>
                <a onClick={() => openLinkInNewWindow("https://swap.crodex.app/#/swap?outputCurrency=0xE7F3c7C6611357313B5C2734341fe9cBad1D9f59 ")} style={{ color: '#000000', cursor: 'pointer' }}>
                     Sycotic Society 🔥 🔥 🔥 🚒 
                </a>
            </p>
        </div>
    );
}
