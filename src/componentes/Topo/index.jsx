import Image from "next/image";
import Link from "next/link";
import styles from "./Topo.module.css";

export default function Topo() {
    return (
        <section className={styles.container}>
            <div className={styles.conteudo}>
                <Image src="/logo.png" alt="Logomarca" width={100} height={50} className={styles.img} />
                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}> Home </Link>
                    <Link href="/sabores" className={styles.link}> Sabores </Link>
                    <Link href="/sobre" className={styles.link}> Sobre </Link>
                </nav>
            </div>
        </section>
    );
}