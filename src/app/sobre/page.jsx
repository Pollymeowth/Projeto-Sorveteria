import styles from "./sobre.module.css";
import Image from "next/image";

import image1 from "../../../public/sobre-image.jpg";
import image2 from "../../../public/sorveteria.jpg";


export default function Sobre() {
    return (
        <main className={styles.containerPrincipal}>
            <section className={styles.banner_home}>
                <h1>A GELATERIA</h1>
            </section>
            <section className={styles.containerConteudo}>
                <h2>A GELATERIA</h2>

                <h3>Nós simplesmente amamos sorvete!</h3>

                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>

                <p> Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>
            <section className={styles.containerImagem}>
                <Image src={image1} alt="image1" className={styles.img}/>
                <Image src={image2} alt="image2" className={styles.img} />
            </section>

        </main>
    );
};