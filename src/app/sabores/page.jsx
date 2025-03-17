import styles from "./sabores.module.css";
import Image from "next/image";

import image1 from "../../../public/sabor-oreo.png";
import image2 from "../../../public/sabor-pistache.png";
import image3 from "../../../public/sabor-cookies-avela.png";
import image4 from "../../../public/sorbet-kiwi.png";
import image5 from "../../../public/sorbet-morango.png";
import image6 from "../../../public/sorbet-limao.png";


export default function Sabores() {
    return (
        <main className={styles.containerPrincipal}>
            <section className={styles.banner_home}>
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className={styles.containerConteudo}>
                <h2>SABORES DE SORVETE</h2>
                <div className={styles.sabores}>
                    <div className={styles.cardSabor}>
                        <Image src={image1} alt="image1" className={styles.imgCard} />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                        </p>
                    </div>
                    <div className={styles.cardSabor}>
                        <Image src={image2} alt="image" className={styles.imgCard} />
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={styles.cardSabor}>
                        <Image src={image3} alt="image3" className={styles.imgCard} />
                        <h3>Sorvete Cookies & Avelã
                        </h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </div>
                    <div className={styles.cardSabor}>
                        <Image src={image4} alt="image4" className={styles.imgCard} />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={styles.cardSabor}>
                        <Image src={image5} alt="image5" className={styles.imgCard} />
                        <h3>Sorvete de Morango
                        </h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.
                        </p>
                    </div>
                    <div className={styles.cardSabor}>
                        <Image src={image6} alt="image6" className={styles.imgCard} />
                        <h3>Sorvete de Limão Siciliano
                        </h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};