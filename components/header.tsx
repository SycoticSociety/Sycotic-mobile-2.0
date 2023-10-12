import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    const openLinkInNewWindow = (linkUrl: string) => {
        window.open(linkUrl, "_blank", "width=700,height=600");
    };

    return (
        <div className={styles.header}>
            <a onClick={() => openLinkInNewWindow("https://swap.crodex.app/#/swap?outputCurrency=0x4E2E7700C8f8A414b4AF8828f54330a304B6625d")} style={{ cursor: 'pointer' }}>
                <Image src={"/images/Thirdweb-Icon-Circle-Black-08 1 (3).gif"} alt="" height={60} width={60}/>
            </a>
            <p style={{ fontSize: 'larger' }}>
                <a onClick={() => openLinkInNewWindow("https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713")} style={{ color: '#000000', cursor: 'pointer' }}>
                    Sycotic Society Crodex!
                </a>
            </p>
        </div>
    );
}
