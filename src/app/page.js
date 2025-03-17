import styles from "./page.module.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape"
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.banner_home}>
        <Image src="/banner-home.png" alt="banner" width={500} height={300} className={styles.bannerImg} />
        <h1>SORVETE ARTESANAL</h1>
      </section>

      <section className={styles.sessaoConteudo}>
        <Image src="/banner-sabores.jpg" alt="Sabores" width={500} height={300}
          className={styles.conteudoImg} />
        <div className={styles.conteudoCard}>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>

      <section className={styles.sessaoConteudo}>
        <div className={styles.conteudoCard}>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delicias com sorvete!</span>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
          </p>
        </div>
        <Image src="/eventos-image.jpg" alt="Eventos" width={500} height={300} className={styles.conteudoImg}  />
      </section>

      <section className={styles.sessaoConteudo}>
        <Image src="/sobre-image.jpg" alt="Eventos" width={500} height={300} className={styles.conteudoImg}/>
        <div className={styles.conteudoCard}>
          <h2>SOBRE NÓS</h2>
          <span>Alegria em cada casquinha!</span>
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </section>
    </main>
  );
}
