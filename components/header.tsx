import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={"/images/Thirdweb-Icon-Circle-Black-08 1.gif"} alt="" height={60} width={60}/>
            <p style={{ fontSize: 'larger' }}>
                <a href="https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713" style={{ color: '#000000' }}>
                    Broke Ape Cronos Club Crodex!
                </a>
            </p>
        </div>
    );
}
