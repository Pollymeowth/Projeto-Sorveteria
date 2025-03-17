import Image from "next/image";
import Link from "next/link";
import styles from "./Rodape.module.css";

export default function Rodape() {
    return (
        <section className={styles.container}>
            <div className={styles.conteudo}>
                <div className={styles.info}>
                    <Image src="/logo.png" alt="Logomarca" width={100} height={50} className={styles.img} />

                    <div className={styles.cardInfo}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div className={styles.cardInfo}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div className={styles.cardInfo}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                </div>
            </div>
            <div className={styles.dev}>Gelateria. Orgulhosamente desenvolvido por <span>Pollyana Roberta de Sousa</span></div>
        </section>
    );
}