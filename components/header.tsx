import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={"/images/Thirdweb-Icon-Circle-Black-08 1.gif"} alt="" height={60} width={60}/>
            <p style={{ fontSize: 'larger' }}>
                <a href="https://www.sycoticsociety.com" style={{ color: '#BA55D3' }}>
                    Sycotic Society Marketplace Home
                </a>
            </p>
        </div>
    );
}
